import React from 'react';
import { connect }          from 'react-redux';
import ChatBox from '../../components/chat/chat_box';
import Actions from '../../actions/topics/show'

class TopicsShowView extends React.Component {
  componentDidMount() {
    const { socket } = this.props.session;
    if (!socket) {
      return false;
    }
    Actions.connectToTopic(this.props.params.id, socket, this.props.dispatch);
  }

  componentWillUnmount() {
    Actions.leaveTopic(this.props.topic.channel, this.props.dispatch);
  }

  render() {
    return (
      <div>
        Hello Index View
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

export default connect(mapStateToProps)(TopicsShowView);
