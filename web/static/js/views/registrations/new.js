import React, {PropTypes}   from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

import { setDocumentTitle, renderErrorsFor } from '../../utils';
import Actions              from '../../actions/registrations';

class RegistrationsNew extends React.Component {
  componentDidMount() {
    setDocumentTitle('Sign up');
  }

  _handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;

    const data = {
      first_name: this.refs.firstName.value,
      last_name: this.refs.lastName.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.passwordConfirmation.value,
    };

    dispatch(Actions.signUp(data));
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="view-container registrations new">
        <main>
          <header>
            <div className="logo" />
          </header>
          <form onSubmit={::this._handleSubmit}>
            <div className="field">
              <input className="form-control" ref="firstName" type="text" placeholder="First name" required={true} />
              {renderErrorsFor(errors, 'first_name')}
            </div>
            <div className="field">
              <input className="form-control" ref="lastName" type="text" placeholder="Last name" required={true} />
              {renderErrorsFor(errors, 'last_name')}
            </div>
            <div className="field">
              <input className="form-control" ref="email" type="email" placeholder="Email" required={true} />
              {renderErrorsFor(errors, 'email')}
            </div>
            <div className="field">
              <input className="form-control" ref="password" type="password" placeholder="Password" required={true} />
              {renderErrorsFor(errors, 'password')}
            </div>
            <div className="field">
              <input className="form-control" ref="passwordConfirmation" type="password" placeholder="Confirm password" required={true} />
              {renderErrorsFor(errors, 'password_confirmation')}
            </div>
            <button className="btn btn-default" type="submit">Sign up</button>
          </form>
          <Link className="btn btn-default" to="/sign_in">Sign in</Link>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.registration.errors,
});

export default connect(mapStateToProps)(RegistrationsNew);
