'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

describe('Alert test', function () {
  it('type', function () {
    var w = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { title: 'TEST', type: 'success' }));
    expect(w.find('div.r-el-alert--success')).toBeTruthy();
    expect(w.find('span.r-el-alert__title').exists()).toBeTruthy();
    expect(w.find('span.r-el-alert__title').text()).toBe('TEST');
  });

  it('default closable', function () {
    var w = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { title: 'TEST', closable: true }));
    expect(w.find('i.r-el-alert__closebtn').prop('style')).toEqual({});
  });

  it('disable close', function () {
    var w = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { title: 'TEST', closable: false }));
    expect(w.find('i.r-el-alert__closebtn').prop('style').display).toBe('none');
  });

  it('closeText', function () {
    var w = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { title: 'TEST', closeText: 'testCloseText' }));
    expect(w.find('i.is-customed').text()).toBe('testCloseText');
  });

  it('onClose', function () {
    var onClose = _sinon2.default.spy();
    var w = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { title: 'TEST', onClose: onClose }));
    w.find('i.r-el-alert__closebtn').simulate('click');
    setTimeout(function () {
      expect(onClose.calledOnce).toBe(true);
    }, 1000);
  });

  it('showIcon', function () {
    var w = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { title: 'TEST', showIcon: true }));
    expect(w.find('i.r-el-alert__icon').exists()).toBeTruthy();
  });

  it('description', function () {
    var w = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
      title: 'TEST',
      description: 'testDescription' }));
    expect(w.find('p.r-el-alert__description').text()).toBe('testDescription');
  });

  it('showIcon and description', function () {
    var w = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
      title: 'TEST',
      showIcon: true,
      description: 'testDescription' }));
    expect(w.find('i.r-el-alert__icon').exists()).toBeTruthy();
    expect(w.find('p.r-el-alert__description').text()).toBe('testDescription');
  });
});