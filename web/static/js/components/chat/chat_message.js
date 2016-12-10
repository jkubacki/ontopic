import React from 'react';

export default class ChatMessage extends React.Component {
  render() {
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
}
