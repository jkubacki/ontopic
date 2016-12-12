import React from 'react';
import ChatMessageBox from './chat_message_box';
import ChatInput from './chat_input';
import TopicInput from './topic_input';

export default class ChatBox extends React.Component {
  _renderTopicInput() {
    if (this.props.showTopicForm) {
      return <TopicInput dispatch={this.props.dispatch}/>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <ChatInput
          dispatch={this.props.dispatch}
          channel={this.props.channel}
          topicId={this.props.topicId}
          showTopicForm={this.props.showTopicForm} />
        {::this._renderTopicInput()}
        <ChatMessageBox
          messages={this.props.messages} />
      </div>
    )
  }
}
