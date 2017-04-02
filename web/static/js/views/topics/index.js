import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions/topics'
import Topic from '../../components/topics/topic'
import ChatBox from '../../components/chat_box';

class TopicsIndexView extends React.Component {
  _renderTopics(topics) {
    return topics.map((topic) => {
      return <Topic
                id={topic.id}
                key={topic.id}
                name={topic.name}
                channel={this.props.topic.channel}
                socket={this.props.session.socket}
                dispatch={this.props.dispatch}
                currentTopicId={this.props.topic.topicId}
                currentUser={this.props.session.currentUser} />
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ul className="topics list-group">
              {::this._renderTopics(this.props.session.topics)}
            </ul>
          </div>
          <div className="col-md-8">
            <ChatBox
                dispatch={this.props.dispatch}
                messages={this.props.topic.messages}
                channel={this.props.topic.channel}
                topicId={this.props.topic.topicId}
                showTopicInput={this.props.topic.showTopicInput}
                showMessageInput={this.props.topic.showMessageInput} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  topic: state.topic
});

export default connect(mapStateToProps)(TopicsIndexView);
