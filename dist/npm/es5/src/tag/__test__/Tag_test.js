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

describe('Tag test', function () {
  it('type', function () {
    var w = (0, _enzyme.mount)(_react2.default.createElement(
      _2.default,
      { type: 'primary' },
      'TEST'
    ));
    expect(w.find('.r-el-tag--primary')).toHaveLength(1);
    expect(w.find('.r-el-tag--primary').text()).toBe('TEST');
  });

  it('closable', function () {
    var w = (0, _enzyme.shallow)(_react2.default.createElement(
      _2.default,
      { type: 'primary', closable: true },
      'TEST'
    ));
    expect(w.find('i.r-el-tag__close').exists()).toBe(true);
  });

  // it('closeTransition', () => {
  //   const w = shallow(
  //     <Tag closable={true} closeTransition={false}>TEST</Tag>
  //   );
  //   expect(w.find('[name="r-el-zoom-in-center"]').exists()).toBe(true);
  // });

  it('hit', function () {
    var w = (0, _enzyme.mount)(_react2.default.createElement(
      _2.default,
      { hit: true },
      'TEST'
    ));
    expect(w.find('.r-el-tag').first().hasClass('is-hit')).toBeTruthy();
  });

  it('onClose', function () {
    var onClose = _sinon2.default.spy();
    var w = (0, _enzyme.shallow)(_react2.default.createElement(
      _2.default,
      { type: 'primary', closable: true, onClose: onClose },
      'TEST'
    ));

    w.find('i.r-el-tag__close').simulate('click');

    expect(onClose.calledOnce).toBe(true);
  });
});