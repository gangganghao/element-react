'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CheckBox2 = require('./CheckBox');

var _CheckBox3 = _interopRequireDefault(_CheckBox2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var CheckboxButton = function (_CheckBox) {
  (0, _inherits3.default)(CheckboxButton, _CheckBox);

  function CheckboxButton() {
    (0, _classCallCheck3.default)(this, CheckboxButton);
    return (0, _possibleConstructorReturn3.default)(this, (CheckboxButton.__proto__ || Object.getPrototypeOf(CheckboxButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(CheckboxButton, [{
    key: 'render',
    value: function render() {
      var group = this.context.ElCheckboxGroup;

      return _react2.default.createElement(
        'label',
        { style: this.style(), className: this.className('r-el-checkbox-button', group.props.size ? 'r-el-checkbox-button--' + group.props.size : '', {
            'is-disabled': this.props.disabled,
            'is-checked': this.state.checked,
            'is-focus': this.state.focus
          }) },
        _react2.default.createElement('input', {
          className: 'r-el-checkbox-button__original',
          type: 'checkbox',
          checked: this.state.checked,
          disabled: this.props.disabled,
          onFocus: this.onFocus.bind(this),
          onBlur: this.onBlur.bind(this),
          onChange: this.onChange.bind(this)
        }),
        _react2.default.createElement(
          'span',
          { className: 'r-el-checkbox-button__inner', style: this.state.checked ? {
              boxShadow: '-1px 0 0 0 ' + group.props.fill,
              backgroundColor: group.props.fill || '',
              borderColor: group.props.fill || '',
              color: group.props.textColor || ''
            } : {} },
          this.state.label || this.props.children
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return CheckboxButton;
}(_CheckBox3.default);

CheckboxButton.elementType = 'CheckboxButton';
var _default = CheckboxButton;
exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CheckboxButton, 'CheckboxButton', 'src/checkbox/CheckBoxButton.jsx');
  reactHotLoader.register(_default, 'default', 'src/checkbox/CheckBoxButton.jsx');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();