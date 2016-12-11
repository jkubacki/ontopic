import React from 'react';
import { connect } from 'react-redux';
import Topic from '../../components/topics/topic'

class TopicsIndexView extends React.Component {
  _renderTopics(topics) {
    return topics.map((topic) => {
      return <Topic
                id={topic.id}
                key={topic.id}
                name={topic.name} />
    });
  }

  render() {
    return (
      <div>
        My Topics:
        {::this._renderTopics(this.props.session.topics)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  session: state.session
});

export default connect(mapStateToProps)(TopicsIndexView);
