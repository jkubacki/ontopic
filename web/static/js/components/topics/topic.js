import React from 'react';
import { Link } from 'react-router';

export default class Topic extends React.Component {
  render() {
    return (
      <div>
        <Link to={"/" + this.props.id}>{this.props.name}</Link>
      </div>
    )
  }
}
