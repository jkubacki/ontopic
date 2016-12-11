import React from 'react';
import { Link } from 'react-router';
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
    return (
      <div onClick={::this._changeTopic}>
        {this.props.name}
      </div>
    )
  }
}
