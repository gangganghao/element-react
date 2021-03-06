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

var Tag = function (_Component) {
  (0, _inherits3.default)(Tag, _Component);

  function Tag(props) {
    (0, _classCallCheck3.default)(this, Tag);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

    _this.state = {
      visible: true
    };
    return _this;
  }

  (0, _createClass3.default)(Tag, [{
    key: 'handleClose',
    value: function handleClose() {
      var _this2 = this;

      this.setState({
        visible: false
      }, function () {
        if (_this2.props.onClose) {
          _this2.props.onClose();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          hit = _props.hit,
          closable = _props.closable,
          closeTransition = _props.closeTransition,
          color = _props.color;


      return _react2.default.createElement(
        _libs.Transition,
        { name: closeTransition ? '' : 'r-el-zoom-in-center' },
        _react2.default.createElement(
          _libs.View,
          { key: this.state.visible, show: this.state.visible },
          _react2.default.createElement(
            'span',
            {
              style: this.style({
                backgroundColor: color
              }),
              className: this.className('r-el-tag', type && 'r-el-tag--' + type, {
                'is-hit': hit
              })
            },
            this.props.children,
            closable && _react2.default.createElement('i', { className: 'r-el-tag__close r-el-icon-close', onClick: this.handleClose.bind(this) })
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
  return Tag;
}(_libs.Component);

var _default = Tag;
exports.default = _default;


Tag.propTypes = {
  closable: _libs.PropTypes.bool,
  type: _libs.PropTypes.string,
  hit: _libs.PropTypes.bool,
  color: _libs.PropTypes.string,
  closeTransition: _libs.PropTypes.bool,
  onClose: _libs.PropTypes.func
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tag, 'Tag', 'src/tag/Tag.jsx');
  reactHotLoader.register(_default, 'default', 'src/tag/Tag.jsx');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();