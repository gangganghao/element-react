/* @flow */

import React from 'react';
import { Component, PropTypes, CollapseTransition } from '../../libs';

export default class CollapseItem extends Component {
  constructor(props: Object) {
    super(props);
  }

  render(): React.DOM {
    const { title, isActive, onClick, name } = this.props;

    return (
      <div
        className={this.classNames({
          'r-el-collapse-item': true,
          'is-active': isActive
        })}
      >
        <div className="r-el-collapse-item__header" onClick={() => onClick(name)}>
          <i className="r-el-collapse-item__header__arrow r-el-icon-arrow-right" />
          {title}
        </div>
        <CollapseTransition isShow={isActive}>
          <div className="r-el-collapse-item__wrap">
            <div className="r-el-collapse-item__content">
              {this.props.children}
            </div>
          </div>
        </CollapseTransition>
      </div>
    );
  }
}

CollapseItem.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  title: PropTypes.node,
  name: PropTypes.string
};
