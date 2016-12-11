import React from 'react';
import Tappable from 'react-tappable';
import Actions from '../../actions/topics/show'

export default class TopicInput extends React.Component {
  _createTopic() {
    //
  }
  render() {
    return (
      <div>
        <form onSubmit={::this._createTopic}>
          <div className="input-group">
            <input className="form-control" type="text" ref="topicInput"/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">Create topic</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
