import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions/topics'

class TopicsView extends React.Component {
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
