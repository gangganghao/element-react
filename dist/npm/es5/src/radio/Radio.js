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

var _libs = require('../../libs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Radio = function (_Component) {
  (0, _inherits3.default)(Radio, _Component);

  function Radio(props) {
    (0, _classCallCheck3.default)(this, Radio);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

    _this.state = {
      checked: _this.getChecked(props)
    };
    return _this;
  }

  (0, _createClass3.default)(Radio, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var checked = this.getChecked(props);

      if (this.state.checked != checked) {
        this.setState({ checked: checked });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var checked = e.target.checked;

      if (checked) {
        if (this.props.onChange) {
          this.props.onChange(this.props.value);
        }
      }

      this.setState({ checked: checked });
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      this.setState({
        focus: true
      });
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      this.setState({
        focus: false
      });
    }
  }, {
    key: 'getChecked',
    value: function getChecked(props) {
      return props.model == props.value || Boolean(props.checked);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          checked = _state.checked,
          focus = _state.focus;
      var _props = this.props,
          disabled = _props.disabled,
          value = _props.value,
          children = _props.children;


      return _react2.default.createElement(
        'label',
        { style: this.style(), className: this.className('r-el-radio') },
        _react2.default.createElement(
          'span',
          { className: this.classNames({
              'r-el-radio__input': true,
              'is-checked': checked,
              'is-disabled': disabled,
              'is-focus': focus
            }) },
          _react2.default.createElement('span', { className: 'r-el-radio__inner' }),
          _react2.default.createElement('input', {
            type: 'radio',
            className: 'r-el-radio__original',
            checked: checked,
            disabled: disabled,
            onChange: this.onChange.bind(this),
            onFocus: this.onFocus.bind(this),
            onBlur: this.onBlur.bind(this)
          })
        ),
        _react2.default.createElement(
          'span',
          { className: 'r-el-radio__label' },
          children || value
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
  return Radio;
}(_libs.Component);

Radio.elementType = 'Radio';
var _default = Radio;
exports.default = _default;


Radio.propTypes = {
  value: _libs.PropTypes.oneOfType([_libs.PropTypes.string, _libs.PropTypes.number]).isRequired,
  onChange: _libs.PropTypes.func,
  disabled: _libs.PropTypes.bool,
  checked: _libs.PropTypes.bool
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Radio, 'Radio', 'src/radio/Radio.jsx');
  reactHotLoader.register(_default, 'default', 'src/radio/Radio.jsx');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();