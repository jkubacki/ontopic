import React from 'react';
import Gravatar from './gravatar';

export default class User extends React.Component {
  render() {
    const { user } = this.props;
    const fullName = [user.first_name, user.last_name].join(' ');

    return (
      <div>
        <Gravatar size="20" url={user.gravatar} /> {fullName}
      </div>
    );
  }
}
