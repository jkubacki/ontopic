import React from 'react';
import Message from './message'

export default class MessageBox extends React.Component {
  _renderMessages(messages) {
    return messages.map((message) => {
      return <Message
                key={message.id}
                body={message.body}
                user={message.user} />;
    });
  }

  render() {
    return (
      <div className="message-box">
        {::this._renderMessages(this.props.messages)}
      </div>
    )
  }
}
