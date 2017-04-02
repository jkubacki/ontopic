import React from 'react';
import Tappable from 'react-tappable';
import Actions from '../../actions/topics'

export default class TopicInput extends React.Component {
  componentDidMount() {
    this._focusOnInput()
  }

  _focusOnInput() {
    this.refs.topicInput.focus();
  }

  _clearInput() {
    this.refs.topicInput.value = '';
  }

  _handleClose(e) {
    if(e.keyCode === 27){
      Actions.hideTopicForm(this.props.dispatch);
    }
  }

  _createTopic(e) {
    e.preventDefault();

    const { topicInput } = this.refs;
    const topic = topicInput.value;
    const { dispatch, channel } = this.props;
    if (topic == "" || !this.props.showTopicInput) {
      return false;
    }
    Actions.createTopic(topic, channel);

    this._clearInput();
    this._focusOnInput();
  }

  render() {
    return (
      <div>
        <form onSubmit={::this._createTopic}>
          <div className="input-group">
            <input onKeyDown={::this._handleClose} className="form-control" type="text" ref="topicInput"/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">Create topic</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
