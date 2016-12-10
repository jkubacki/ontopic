import React from 'react';
import { connect }          from 'react-redux';
import ChatBox from '../../components/chat/chat_box';

class HomeIndexView extends React.Component {
  render() {
    return (
      <div>
        Hello Index View
        <ChatBox
          dispatch={this.props.dispatch} />
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  state.session
);

export default connect(mapStateToProps)(HomeIndexView);
