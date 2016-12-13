import React from 'react';
import User from '../user';

export default class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <User user={this.props.user} />
        <div className="message__body">
          {this.props.body}
        </div>
      </div>
    )
  }
}
