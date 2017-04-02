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
          <Tappable onPress={::this._handlePressEvent}>
            <div className="input-group">
              <input className="form-control" type="text" ref="messageInput" onKeyUp={::this._handleKeyUp}/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit" onClick={::this._handleButton}>Send</button>
              </span>
            </div>
          </Tappable>
        </form>
      </div>
    )
  }
}
