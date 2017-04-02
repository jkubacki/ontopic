import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'
import Actions from '../../actions/topics'

export default class Topic extends React.Component {
  _changeTopic() {
    const { id, socket, dispatch, currentTopicId, currentUser } = this.props;
    if (currentTopicId == id) {
      return false;
    }
    Actions.changeTopic(id, socket, currentUser, dispatch);
  }

  _leaveTopic() {
    const { id, userChannel } = this.props;
    Actions.leaveTopic(id, userChannel);
  }

  render() {
    let classes = classNames("topic", "list-group-item", { "topic--current": (this.props.currentTopicId == this.props.id) });
    return (
      <div>
        <li className={classes} onClick={::this._changeTopic}>
          {this.props.name}
        </li>
        <button className={classes} style={{width: 25, height: 25, padding: 10}} onClick={::this._leaveTopic}>
          x
        </button>
      </div>
    )
  }
}
