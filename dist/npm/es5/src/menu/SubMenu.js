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

var _libs = require('../../libs');

var _MixinComponent2 = require('./MixinComponent');

var _MixinComponent3 = _interopRequireDefault(_MixinComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SubMenu = function (_MixinComponent) {
  (0, _inherits3.default)(SubMenu, _MixinComponent);

  function SubMenu(props) {
    (0, _classCallCheck3.default)(this, SubMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SubMenu.__proto__ || Object.getPrototypeOf(SubMenu)).call(this, props));

    _this.instanceType = 'SubMenu';

    _this.state = {
      active: false
    };
    return _this;
  }

  (0, _createClass3.default)(SubMenu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        component: this
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.rootMenu().state.submenus[this.props.index] = this;
      this.initEvents();
    }
  }, {
    key: 'onItemSelect',
    value: function onItemSelect(index, indexPath) {
      this.setState({
        active: indexPath.indexOf(this.props.index) !== -1
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.rootMenu().handleSubmenuClick(this.props.index, this.indexPath());
    }
  }, {
    key: 'handleMouseenter',
    value: function handleMouseenter() {
      var _this2 = this;

      clearTimeout(this.timeout);

      this.timeout = setTimeout(function () {
        _this2.rootMenu().openMenu(_this2.props.index, _this2.indexPath());
      }, 300);
    }
  }, {
    key: 'handleMouseleave',
    value: function handleMouseleave() {
      var _this3 = this;

      clearTimeout(this.timeout);

      this.timeout = setTimeout(function () {
        _this3.rootMenu().closeMenu(_this3.props.index, _this3.indexPath());
      }, 300);
    }
  }, {
    key: 'initEvents',
    value: function initEvents() {
      if (this.rootMenu().props.mode === 'horizontal' && this.rootMenu().props.menuTrigger === 'hover') {
        var triggerElm = _reactDom2.default.findDOMNode(this);

        triggerElm.addEventListener('mouseenter', this.handleMouseenter.bind(this));
        triggerElm.addEventListener('mouseleave', this.handleMouseleave.bind(this));
      } else {
        var _triggerElm = this.refs['submenu-title'];

        _triggerElm.addEventListener('click', this.handleClick.bind(this));
      }
    }
  }, {
    key: 'opened',
    value: function opened() {
      return this.rootMenu().state.openedMenus.indexOf(this.props.index) !== -1;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { style: this.style(), className: this.className('r-el-submenu', {
            'is-active': this.state.active,
            'is-opened': this.opened()
          }) },
        _react2.default.createElement(
          'div',
          { ref: 'submenu-title', className: 'r-el-submenu__title' },
          this.props.title,
          _react2.default.createElement('i', { className: this.classNames('r-el-submenu__icon-arrow', {
              'r-el-icon-arrow-down': this.rootMenu().props.mode === 'vertical',
              'r-el-icon-caret-bottom': this.rootMenu().props.mode === 'horizontal'
            }) })
        ),
        this.rootMenu().props.mode === 'horizontal' ? _react2.default.createElement(
          _libs.Transition,
          { name: 'r-el-zoom-in-top' },
          _react2.default.createElement(
            _libs.View,
            { show: this.opened() },
            _react2.default.createElement(
              'ul',
              { className: 'r-el-menu' },
              this.props.children
            )
          )
        ) : _react2.default.createElement(
          _libs.CollapseTransition,
          { isShow: this.opened() },
          _react2.default.createElement(
            'ul',
            { className: 'r-el-menu' },
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
  return SubMenu;
}(_MixinComponent3.default);

var _default = SubMenu;
exports.default = _default;


SubMenu.childContextTypes = {
  component: _libs.PropTypes.any
};

SubMenu.propTypes = {
  index: _libs.PropTypes.string.isRequired
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SubMenu, 'SubMenu', 'src/menu/SubMenu.jsx');
  reactHotLoader.register(_default, 'default', 'src/menu/SubMenu.jsx');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();