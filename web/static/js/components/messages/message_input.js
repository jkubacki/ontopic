import React from 'react';
import Tappable from 'react-tappable';
import Actions from '../../actions/topics'

export default class MessageInput extends React.Component {
  componentDidMount() {
    this._focusOnInput()
  }

  componentDidUpdate() {
    if (!this.props.showTopicInput) {
      this._focusOnInput()
    }
  }

  _clearInput() {
    this.refs.messageInput.value = '';
  }

  _focusOnInput() {
    this.refs.messageInput.focus();
  }

  _handleKeyUp(e) {
    e.preventDefault();
    if (this.props.showTopicInput || e.keyCode !== 13) {
      return false;
    }
    this._sendMessage()
  }

  _handleButton(e) {
    e.preventDefault();
    this._sendMessage();
  }

  _sendMessage() {
    const { messageInput } = this.refs;
    const message = messageInput.value;
    const { dispatch, channel, topicId } = this.props;
    if (message === "") {
      return false;
    }
    Actions.sendMessage(message, topicId, channel);

    this._clearInput();
    this._focusOnInput();
  }

  _handlePressEvent(e) {
    Actions.showTopicInput(this.props.dispatch);
  }

  _doNothing(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={::this._doNothing}>
          <div className="input-group">
            <Tappable onPress={::this._handlePressEvent} onKeyUp={::this._handleKeyUp}>
              <input className="form-control" type="text" ref="messageInput"/>
            </Tappable>
            <span className="input-group-btn">
              <Tappable onPress={::this._handlePressEvent} onClick={::this._handleButton}>
                <button className="btn btn-default" type="submit">Send</button>
              </Tappable>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
