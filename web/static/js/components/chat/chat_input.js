import React from 'react';
import Tappable from 'react-tappable';
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
    if (message == "" || this.props.showTopicForm) {
      return false;
    }
    Actions.sendMessage(message, topicId, channel);

    this._clearInput();
    this._focusOnInput();
  }

  _handlePressEvent(e) {
    Actions.showTopicForm(this.props.dispatch);
  }

  _doNothing(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={::this._doNothing}>
          <div className="input-group">
            <Tappable onPress={::this._handlePressEvent} onKeyUp={::this._sendMessage}>
              <input className="form-control" type="text" ref="messageInput"/>
            </Tappable>
            <span className="input-group-btn">
              <Tappable onPress={::this._handlePressEvent}>
                <button className="btn btn-default" type="submit">Send</button>
              </Tappable>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
