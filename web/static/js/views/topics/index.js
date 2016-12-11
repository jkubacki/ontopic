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
                name={topic.name} />
    });
  }

  render() {
    return (
      <div>
        {::this._renderTopics(this.props.session.topics)}
        <ChatBox
            dispatch={this.props.dispatch}
            messages={this.props.topic.messages}
            channel={this.props.topic.channel}
            topicId={this.props.topic.topicId} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  topic: state.topic
});

export default connect(mapStateToProps)(TopicsIndexView);
