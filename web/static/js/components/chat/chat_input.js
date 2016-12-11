import React from 'react';
import Actions from '../../actions/topics/show'

export default class ChatInput extends React.Component {
  componentDidMount() {
    this._focusOnInput()
  }

  _clearInput() {
    this.refs.messageInput.value = '';
  }

  _focusOnInput() {
    this.refs.messageInput.focus();
  }

  _sendMessage(e) {
    e.preventDefault();

    const { messageInput } = this.refs;
    const message = messageInput.value;
    const { dispatch, channel, topicId } = this.props;
    Actions.sendMessage(message, topicId, channel);

    this._clearInput();
    this._focusOnInput();
  }

  render() {
    return (
      <div>
        <form onSubmit={::this._sendMessage}>
          <input type="text" ref="messageInput"/>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}
