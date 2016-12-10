import React from 'react';
import ChatMessage from './chat_message'

export default class ChatMessageBox extends React.Component {
  _renderMessages(messages) {
    var i = 0;
    return messages.map((message) => {
      return <ChatMessage
                key={i += 1}
                message={message} />;
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
