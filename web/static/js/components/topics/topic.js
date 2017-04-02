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

  render() {
    let classes = classNames("topic", "list-group-item", { "topic--current": (this.props.currentTopicId == this.props.id) });
    return (
      <li className={classes} onClick={::this._changeTopic}>
        {this.props.name}
      </li>
    )
  }
}
