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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _popper = require('popper.js');

var _popper2 = _interopRequireDefault(_popper);

var _libs = require('../../libs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var DropdownMenu = function (_Component) {
  (0, _inherits3.default)(DropdownMenu, _Component);

  function DropdownMenu(props) {
    (0, _classCallCheck3.default)(this, DropdownMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).call(this, props));

    _this.state = {
      showPopper: false
    };
    return _this;
  }

  (0, _createClass3.default)(DropdownMenu, [{
    key: 'onVisibleChange',
    value: function onVisibleChange(visible) {
      this.setState({
        showPopper: visible
      });
    }
  }, {
    key: 'onEnter',
    value: function onEnter() {
      var parent = _reactDom2.default.findDOMNode(this.parent());

      this.popperJS = new _popper2.default(parent, this.refs.popper, {
        placement: this.placement(),
        modifiers: {
          computeStyle: {
            gpuAcceleration: false
          }
        }
      });
    }
  }, {
    key: 'onAfterLeave',
    value: function onAfterLeave() {
      this.popperJS.destroy();
    }
  }, {
    key: 'parent',
    value: function parent() {
      return this.context.component;
    }
  }, {
    key: 'placement',
    value: function placement() {
      return 'bottom-' + this.parent().props.menuAlign;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _libs.Transition,
        { name: 'r-el-zoom-in-top', onEnter: this.onEnter.bind(this), onAfterLeave: this.onAfterLeave.bind(this) },
        _react2.default.createElement(
          _libs.View,
          { show: this.state.showPopper },
          _react2.default.createElement(
            'ul',
            { ref: 'popper', style: this.style(), className: this.className('r-el-dropdown-menu') },
            this.props.children
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
  return DropdownMenu;
}(_libs.Component);

var _default = DropdownMenu;
exports.default = _default;


DropdownMenu.contextTypes = {
  component: _libs.PropTypes.any
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DropdownMenu, 'DropdownMenu', 'src/dropdown/DropdownMenu.jsx');
  reactHotLoader.register(_default, 'default', 'src/dropdown/DropdownMenu.jsx');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();