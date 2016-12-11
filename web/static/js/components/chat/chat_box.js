import React from 'react';
import ChatMessageBox from './chat_message_box';
import ChatInput from './chat_input';

export default class ChatBox extends React.Component {
  render() {
    return (
      <div>
        <ChatInput
          dispatch={this.props.dispatch}
          channel={this.props.channel}
          topicId={this.props.topicId}
          showTopicForm={this.props.showTopicForm} />
        <ChatMessageBox
          messages={this.props.messages} />
      </div>
    )
  }
}
