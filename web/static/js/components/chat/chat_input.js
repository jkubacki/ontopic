import React from 'react';

export default class ChatInput extends React.Component {
  _sendMessage(e) {
    e.preventDefault();

    const { messageInput } = this.refs;
    const message = messageInput.value;
    console.log(message);
  }

  render() {
    return (
      <div>
        <form onSubmit={::this._sendMessage}>
          <input type="text" ref="messageInput" />
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}
