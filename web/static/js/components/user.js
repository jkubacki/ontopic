import React from 'react';
import ReactGravatar from 'react-gravatar';

export default class Topic extends React.Component {
  render() {
    const { user } = this.props;
    const fullName = [user.first_name, user.last_name].join(' ');

    return (
      <div>
        <ReactGravatar size={20} email={user.email} /> {fullName}
      </div>
    );
  }
}
