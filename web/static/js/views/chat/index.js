import React from 'react';
import { connect }          from 'react-redux';
import ChatBox from '../../components/chat/chat_box';

class ChatView extends React.Component {
  render() {
    return (
      <div>
        Hello Index View
        <ChatBox
          dispatch={this.props.dispatch}
          messages={this.props.chat.messages} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  chat: state.chat
});

export default connect(mapStateToProps)(ChatView);
