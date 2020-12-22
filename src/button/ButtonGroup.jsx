/* @flow */

import React from 'react';
import { Component } from '../../libs';

export default class ButtonGroup extends Component {
  render(): React.DOM {
    return (
      <div style={this.style()} className={this.className('r-el-button-group')}>
        {this.props.children}
      </div>
    )
  }
}
