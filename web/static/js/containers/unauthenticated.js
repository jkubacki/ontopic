import React from 'react';
import { connect } from 'react-redux';
import Header from '../layouts/header';

class UnauthenticatedContainer extends React.Component {
  render() {
    return (
      <div className="application-container">
        <Header
          currentUser={null}
          dispatch={this.props.dispatch}/>

        <div className="main-container container">
          {this.props.children}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps)(UnauthenticatedContainer);
