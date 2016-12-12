import React from 'react';
import Message from './message'

export default class MessageBox extends React.Component {
  _renderMessages(messages) {
    return messages.map((message) => {
      return <Message
                key={message.id}
                message={message.body} />;
    });
  }

  render() {
    return (
      <div>
        {::this._renderMessages(this.props.messages)}
      </div>
    )
  }
}
