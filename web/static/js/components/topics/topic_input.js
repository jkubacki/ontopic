import React from 'react';
import Tappable from 'react-tappable';
import Actions from '../../actions/topics/show'

export default class TopicInput extends React.Component {
  componentDidMount() {
    this._focusOnInput()
  }

  _focusOnInput() {
    this.refs.topicInput.focus();
  }

  _createTopic(e) {
    e.preventDefault();
  }

  _handleClose(e) {
    if(e.keyCode === 27){
      Actions.hideTopicForm(this.props.dispatch);
    }
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
