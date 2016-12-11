import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions/topics'
import Topic from '../../components/topics/topic'

class TopicsIndexView extends React.Component {
  componentDidMount() {
    Actions.fetchTopics(this.props.dispatch);
  }

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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(TopicsIndexView);
