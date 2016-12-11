import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions/topics/show'
import Topic from '../../components/topics/topic'
import ChatBox from '../../components/chat/chat_box';

class TopicsIndexView extends React.Component {
  componentDidMount() {
    const { socket } = this.props.session;
    if (!socket) {
      return false;
    }
    let topicId = this.props.params.id || 1
    Actions.connectToTopic(topicId, socket, this.props.dispatch);
  }

  _renderTopics(topics) {
    return topics.map((topic) => {
      return <Topic
                id={topic.id}
                key={topic.id}
                name={topic.name}
                channel={this.props.topic.channel}
                socket={this.props.session.socket}
                dispatch={this.props.dispatch}
                currentTopicId={this.props.topic.topicId} />
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            {::this._renderTopics(this.props.session.topics)}
          </div>
          <div className="col-md-10">
            <ChatBox
                dispatch={this.props.dispatch}
                messages={this.props.topic.messages}
                channel={this.props.topic.channel}
                topicId={this.props.topic.topicId}
                showTopicForm={this.props.topic.showTopicForm} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  topic: state.topic
});

export default connect(mapStateToProps)(TopicsIndexView);
