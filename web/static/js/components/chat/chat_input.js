import React from 'react';
import Actions from '../../actions/chat'

export default class ChatInput extends React.Component {
  componentDidMount() {
    this.refs.messageInput.focus();
  }

  _sendMessage(e) {
    e.preventDefault();

    const { messageInput } = this.refs;
    const message = messageInput.value;
    console.log(message);
    dispatch(Actions.sendMessage(message));
    messageInput.value = '';
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
