import React from 'react';
import { connect }          from 'react-redux';
import ChatBox from '../../components/chat/chat_box';
import Actions from '../../actions/topic'

class TopicsShowView extends React.Component {
  componentDidMount() {
    const { socket } = this.props.session;
    if (!socket) {
      return false;
    }
    Actions.connectToTopic(this.props.params.id, socket, this.props.dispatch);
  }

  render() {
    return (
      <div>
        Hello Index View
        <ChatBox
          dispatch={this.props.dispatch}
          messages={this.props.chat.messages}
          channel={this.props.chat.channel}
          topicId={this.props.chat.topicId} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  chat: state.chat
});

export default connect(mapStateToProps)(TopicsShowView);
