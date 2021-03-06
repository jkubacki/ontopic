import { push }                           from 'react-router-redux';
import Constants                          from '../constants';
import { Socket }                         from 'phoenix';
import { httpGet, httpPost, httpDelete }  from '../utils';
import TopicActions                       from './topics'

export function setCurrentUser(dispatch, user) {
  const socket = new Socket('/socket', {
    params: { token: localStorage.getItem('phoenixAuthToken') },
    logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data); },
  });

  socket.connect();

  const channel = socket.channel(`users:${user.id}`);

  if (channel.state != 'joined') {
    channel.join().receive('ok', (payload) => {
      dispatch({
        type: Constants.CURRENT_USER,
        currentUser: user,
        socket: socket,
        channel: channel,
        topics: payload.topics
      });
      if (payload.topic_id) {
        TopicActions.connectToTopic(payload.topic_id, socket, user, dispatch);
      } else {
        TopicActions.showTopicInput(dispatch);
      }
    });
  }

  channel.on("topic:created", (msg) => {
    if (user.id == msg.user_id) {
      dispatch({
        type: Constants.TOPIC_CREATED,
        topic: msg.topic,
      });
      TopicActions.hideTopicInput(dispatch)
      TopicActions.changeTopic(msg.topic.id, socket, user, dispatch)
    }
  })

  channel.on("topic:left", (msg) => {
    if (user.id == msg.user_id) {
      dispatch({
        type: Constants.TOPIC_LEFT,
        topicId: msg.topic_id,
      });
    }
  })
};

const Actions = {
  signIn: (email, password) => {
    return dispatch => {
      const data = {
        session: {
          email: email,
          password: password,
        },
      };

      httpPost('/api/v1/sessions', data)
      .then((data) => {
        localStorage.setItem('phoenixAuthToken', data.jwt);
        setCurrentUser(dispatch, data.user);
        dispatch(push('/'));
      })
      .catch((error) => {
        error.response.json()
        .then((errorJSON) => {
          dispatch({
            type: Constants.SESSIONS_ERROR,
            error: errorJSON.error,
          });
        });
      });
    };
  },

  currentUser: () => {
    return dispatch => {
      const authToken = localStorage.getItem('phoenixAuthToken');

      httpGet('/api/v1/current_user')
      .then(function (data) {
        setCurrentUser(dispatch, data);
      })
      .catch(function (error) {
        console.log(error);
        dispatch(push('/sign_in'));
      });
    };
  },


  signOut: () => {
    return dispatch => {
      httpDelete('/api/v1/sessions')
      .then((data) => {
        localStorage.removeItem('phoenixAuthToken');

        dispatch({ type: Constants.USER_SIGNED_OUT, });

        dispatch(push('/sign_in'));
      })
      .catch(function (error) {
        console.log(error);
      });
    };
  },
};

export default Actions;
