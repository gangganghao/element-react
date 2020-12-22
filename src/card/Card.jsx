/* @flow */

import React from 'react';
import { Component, PropTypes } from '../../libs';

export default class Card extends Component {
  static defaultProps = {
    bodyStyle: {
      padding: '20px'
    }
  }

  render(): React.DOM {
    const { header, bodyStyle, children } = this.props;
    return (
      <div style={this.style()} className={this.className('r-el-card')}>
        {
          header && <div className="r-el-card__header">{ header }</div>
        }
        <div className="r-el-card__body" style={ bodyStyle }>
          { children }
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  header: PropTypes.node,
  bodyStyle: PropTypes.object
};
