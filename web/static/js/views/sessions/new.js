import React, {PropTypes}   from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

import { setDocumentTitle } from '../../utils';
import Actions              from '../../actions/sessions';

class SessionsNew extends React.Component {
  componentDidMount() {
    setDocumentTitle('Sign in');
  }

  _handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.refs;
    const { dispatch } = this.props;

    dispatch(Actions.signIn(email.value, password.value));
  }

  _renderError() {
    let { error } = this.props;

    if (!error) return false;

    return (
      <div className="error">
        {error}
      </div>
    );
  }

  render() {
    return (
      <div className='view-container sessions new'>
        <main>
          <header>
            <div className="logo" />
          </header>
          <form id="sign_in_form" onSubmit={::this._handleSubmit}>
            {::this._renderError()}
            <div className="field">
              <input
                className="form-control"
                ref="email"
                type="Email"
                id="user_email"
                placeholder="Email"
                required="true"
                defaultValue="john@phoenix-trello.com"/>
            </div>
            <div className="field">
              <input
                className="form-control"
                ref="password"
                type="password"
                id="user_password"
                placeholder="Password"
                required="true"
                defaultValue="12345678"/>
            </div>
            <button className="btn btn-default" type="submit">Sign in</button>
          </form>
          <Link className="btn btn-default" to="/sign_up">Create new account</Link>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  state.session
);

export default connect(mapStateToProps)(SessionsNew);
