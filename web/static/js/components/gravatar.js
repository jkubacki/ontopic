import React from 'react';

export default class Gravatar extends React.Component {
  render() {
    const { url, size } = this.props
    return (
      <span>
        <img src={`${url}?d=retro&r=g&s=20`} srcSet={`${url}?d=retro&r=g&s=40 2x`} height={size} width={size} className="gravatar" />
      </span>
    )
  }
}
