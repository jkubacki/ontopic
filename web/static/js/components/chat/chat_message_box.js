import React from 'react';
import ChatMessage from './chat_message'

export default class ChatMessageBox extends React.Component {
  _renderMessages(messages) {
    return messages.map((message) => {
      return <ChatMessage
                key={message.id}
                message={message.body} />;
    });
  }

  render() {
    return (
      <div>
        {::this._renderMessages(this.props.messages)}
      </div>
    )
  }
}
