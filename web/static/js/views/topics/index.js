import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions/topics'

class TopicsView extends React.Component {
  componentDidMount() {
    Actions.fetchTopics(this.props.dispatch);
  }

  render() {
    return (
      <div>Hello topics</div>
    )
  }
}

const mapStateToProps = (state) => ({
  session: state.session//,
  // topics: state.topics
});

export default connect(mapStateToProps)(TopicsView);
