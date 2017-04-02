import React from 'react';
import MessageBox from './messages/message_box';
import MessageInput from './messages/message_input';
import TopicInput from './topics/topic_input';

export default class ChatBox extends React.Component {
  _renderTopicInput() {
    if (this.props.showTopicInput) {
      return <TopicInput
              dispatch={this.props.dispatch}
              channel={this.props.userChannel}
              showTopicInput={this.props.showTopicInput} />;
    } else {
      return null;
    }
  }

  _renderMessageInput() {
    if (this.props.showMessageInput) {
      return <MessageInput
              dispatch={this.props.dispatch}
              channel={this.props.channel}
              topicId={this.props.topicId}
              showTopicInput={this.props.showTopicInput} />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        {::this._renderMessageInput()}
        {::this._renderTopicInput()}
        <MessageBox
          messages={this.props.messages} />
      </div>
    )
  }
}
