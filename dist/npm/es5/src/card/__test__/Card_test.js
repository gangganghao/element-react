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

describe('Card test', function () {
  it('render header', function () {
    var w = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { header: 'HEADER' }));
    expect(w.find('.r-el-card__header').at(0).text()).toBe('HEADER');
  });

  it('render body', function () {
    var w = (0, _enzyme.shallow)(_react2.default.createElement(
      _2.default,
      null,
      'BODY'
    ));
    expect(w.find('.r-el-card__body').at(0).text()).toBe('BODY');
  });

  it('use bodyStyle', function () {
    var bodyStyle = {
      padding: '5px',
      border: '1px solid blue'
    };
    var w = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { bodyStyle: bodyStyle }));
    expect(w.find('.r-el-card__body').at(0).prop('style')).toEqual(bodyStyle);
  });
});