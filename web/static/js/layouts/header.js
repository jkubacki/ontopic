import React          from 'react';
import { Link }       from 'react-router';
import Actions        from '../actions/sessions';
import ReactGravatar  from 'react-gravatar';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  _renderRightNav() {
    const { currentUser } = this.props;

    if (currentUser) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            {this._renderCurrentUser()}
          </li>
          <li>
            {this._renderSignOutLink()}
          </li>
        </ul>
      );
    }
  }

  _renderCurrentUser() {
    const { currentUser } = this.props;

    const fullName = [currentUser.first_name, currentUser.last_name].join(' ');

    return (
      <a className="current-user">
        <ReactGravatar size={20} email={currentUser.email} /> {fullName}
      </a>
    );
  }

  _renderSignOutLink() {
    return (
      <a href="#" onClick={::this._handleSignOutClick}><i className="fa fa-sign-out"/> Sign out</a>
    );
  }

  _handleSignOutClick(e) {
    e.preventDefault();

    this.props.dispatch(Actions.signOut());
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/"><span className="navbar-brand">Ontopic</span></Link>
          </div>
          <div className="collapse navbar-collapse">
            {this._renderRightNav()}
          </div>
        </div>
      </nav>
    );
  }
}
