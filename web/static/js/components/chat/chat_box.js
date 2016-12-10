import React from 'react';
import ChatMessageBox from './chat_message_box';
import ChatInput from './chat_input';

export default class ChatBox extends React.Component {
  render() {
    return (
      <div>
        -> Hello Chatbox
        <ChatMessageBox
          messages={this.props.messages} />
        <ChatInput
          dispatch={this.props.dispatch} />
      </div>
    )
  }
}
