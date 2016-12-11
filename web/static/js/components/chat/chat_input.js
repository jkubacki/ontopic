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
          <div className="input-group">
            <input className="form-control" type="text" ref="messageInput"/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">Send</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
