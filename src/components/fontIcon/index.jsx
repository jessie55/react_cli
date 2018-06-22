/*
 * font-awesome icon
 *
 * @props
 *   className   string    对应font-awesome类名，如'fa-flag'
 *   style       object    css样式
 */

import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './icon.scss';

export default class FontIcon extends React.PureComponent {
  render() {
    return (
      <i
        className={`fontIcon fa ${this.props.className}`}
        style={this.props.style}
      />
    );
  }
}
