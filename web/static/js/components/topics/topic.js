import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'
import Actions from '../../actions/topics/show'

export default class Topic extends React.Component {
  _changeTopic() {
    const { id, channel, socket, dispatch, currentTopicId } = this.props;
    if (currentTopicId == id) {
      return false;
    }
    Actions.changeTopic(id, channel, socket, dispatch);
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
