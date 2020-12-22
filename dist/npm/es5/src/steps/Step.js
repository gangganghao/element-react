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

var Step = function (_Component) {
  (0, _inherits3.default)(Step, _Component);

  function Step(props) {
    (0, _classCallCheck3.default)(this, Step);
    return (0, _possibleConstructorReturn3.default)(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this, props));
  }

  (0, _createClass3.default)(Step, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          icon = _props.icon,
          description = _props.description,
          status = _props.status,
          direction = _props.direction,
          style = _props.style,
          lineStyle = _props.lineStyle,
          stepNumber = _props.stepNumber;

      var directionClass = 'is-' + direction;
      var statusClass = 'is-' + status;
      var iconNode = icon ? _react2.default.createElement('i', { className: 'r-el-icon-' + icon }) : _react2.default.createElement(
        'div',
        null,
        stepNumber
      );

      return _react2.default.createElement(
        'div',
        {
          style: this.style(style),
          className: this.className('r-el-step', directionClass)
        },
        _react2.default.createElement(
          'div',
          {
            className: this.classNames('r-el-step__head', statusClass, {
              'is-text': !icon
            })
          },
          _react2.default.createElement(
            'div',
            {
              className: this.classNames('r-el-step__line', directionClass, {
                'is-icon': icon
              })
            },
            _react2.default.createElement('i', { className: 'r-el-step__line-inner', style: lineStyle })
          ),
          _react2.default.createElement(
            'span',
            { className: 'r-el-step__icon' },
            status !== 'success' && status !== 'error' ? iconNode : _react2.default.createElement('i', {
              className: 'r-el-icon-' + (status === 'success' ? 'check' : 'close')
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'r-el-step__main' },
          _react2.default.createElement(
            'div',
            {
              ref: 'title',
              className: this.classNames('r-el-step__title', statusClass)
            },
            title
          ),
          _react2.default.createElement(
            'div',
            { className: this.classNames('r-el-step__description', statusClass) },
            description
          )
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
  return Step;
}(_libs.Component);

Step.defaultProps = {
  status: 'wait'
};
var _default = Step;
exports.default = _default;


Step.propTypes = {
  title: _libs.PropTypes.string,
  icon: _libs.PropTypes.string,
  description: _libs.PropTypes.oneOfType([_libs.PropTypes.string, _libs.PropTypes.node]),
  status: _libs.PropTypes.string,
  direction: _libs.PropTypes.string,
  style: _libs.PropTypes.object,
  lineStyle: _libs.PropTypes.object,
  stepNumber: _libs.PropTypes.number
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Step, 'Step', 'src/steps/Step.jsx');
  reactHotLoader.register(_default, 'default', 'src/steps/Step.jsx');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();