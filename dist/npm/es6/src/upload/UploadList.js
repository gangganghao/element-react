import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Component, PropTypes, Transition, View } from '../../libs';
import Progress from '../progress/Progress';

var UploadList = function (_Component) {
  _inherits(UploadList, _Component);

  function UploadList(props) {
    _classCallCheck(this, UploadList);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  UploadList.prototype.uploadList = function uploadList() {
    var _classNames,
        _this2 = this;

    var _context = this.context,
        onPreview = _context.onPreview,
        onRemove = _context.onRemove;
    var _props = this.props,
        listType = _props.listType,
        fileList = _props.fileList;

    var isFinished = function isFinished(status) {
      return status === 'success';
    };
    if (listType === 'none') return null;
    return React.createElement(
      'ul',
      {
        className: this.classNames((_classNames = {
          'r-el-upload-list': true
        }, _classNames['r-el-upload-list--' + listType] = true, _classNames))
      },
      fileList.map(function (file) {
        var _this2$classNames;

        return React.createElement(
          'li',
          {
            className: _this2.classNames((_this2$classNames = {
              'r-el-upload-list__item': true
            }, _this2$classNames['is-' + file.status] = true, _this2$classNames)),
            key: file.uid
          },
          ['picture-card', 'picture'].includes(listType) && isFinished(file.status) && React.createElement('img', {
            className: 'r-el-upload-list__item-thumbnail',
            src: file.url,
            alt: ''
          }),
          React.createElement(
            'a',
            {
              className: 'r-el-upload-list__item-name',
              onClick: function onClick() {
                return onPreview(file);
              }
            },
            React.createElement('i', { className: 'r-el-icon-document' }),
            file.name
          ),
          React.createElement(
            'label',
            {
              className: 'r-el-upload-list__item-status-label'
            },
            React.createElement('i', {
              className: _this2.classNames({
                'r-el-icon-upload-success': true,
                'r-el-icon-circle-check': listType === 'text',
                'r-el-icon-check': ['picture-card', 'picture'].includes(listType)
              })
            })
          ),
          React.createElement('i', { className: 'r-el-icon-close', onClick: function onClick() {
              return onRemove(file);
            } }),
          React.createElement(
            View,
            {
              className: 'r-el-upload-list__item-actions',
              show: listType === 'picture-card' && isFinished(file.status)
            },
            React.createElement(
              'span',
              null,
              React.createElement(
                'span',
                {
                  onClick: function onClick() {
                    return onPreview(file);
                  },
                  className: 'r-el-upload-list__item-preview'
                },
                React.createElement('i', { className: 'r-el-icon-view' })
              ),
              React.createElement(
                'span',
                {
                  className: 'r-el-upload-list__item-delete',
                  onClick: function onClick() {
                    return onRemove(file);
                  }
                },
                React.createElement('i', { className: 'r-el-icon-delete2' })
              )
            )
          ),
          file.status === 'uploading' && React.createElement(Progress, {
            strokeWidth: listType === 'picture-card' ? 6 : 2,
            type: listType === 'picture-card' ? 'circle' : 'line',
            percentage: parseInt(file.percentage, 10),
            status: isFinished(file.status) && file.showProgress ? 'success' : ''
          })
        );
      })
    );
  };

  UploadList.prototype.render = function render() {
    return React.createElement(
      Transition,
      { name: 'list' },
      this.uploadList()
    );
  };

  return UploadList;
}(Component);

export default UploadList;


UploadList.contextTypes = {
  onPreview: PropTypes.func,
  onRemove: PropTypes.func
};

UploadList.propTypes = {
  listType: PropTypes.string,
  fileList: PropTypes.array
};