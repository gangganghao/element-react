'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _throttleDebounce = require('throttle-debounce');

var _libs = require('../../libs');

var _resizeEvent = require('../../libs/utils/resize-event');

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

var _utils = require('./utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TableLayout = function (_Component) {
  (0, _inherits3.default)(TableLayout, _Component);

  function TableLayout(props) {
    (0, _classCallCheck3.default)(this, TableLayout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TableLayout.__proto__ || Object.getPrototypeOf(TableLayout)).call(this, props));

    _this.state = {
      height: props.height || props.maxHeight || null, // Table's height or maxHeight prop
      gutterWidth: (0, _utils.getScrollBarWidth)(), // scrollBar width
      tableHeight: null, // Table's real height
      headerHeight: null, // header's height of Table
      bodyHeight: null, // body's height of Table
      footerHeight: null, // footer's height of Table
      fixedBodyHeight: null, // fixed body's height of Table
      viewportHeight: null, // Table's real height without y scroll bar height
      scrollX: null, // has x scroll bar
      scrollY: null // has y scroll bar
    };

    _this.resizeListener = (0, _throttleDebounce.throttle)(50, function () {
      _this.scheduleLayout();
    });
    return _this;
  }

  (0, _createClass3.default)(TableLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.el = this.table.el;

      this.scheduleLayout();
      (0, _resizeEvent.addResizeListener)(this.el, this.resizeListener);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var preHeight = this.props.height || this.props.maxHeight;
      var nextHeight = nextProps.height || nextProps.maxHeight;
      if (preHeight !== nextHeight) {
        this.setState({
          height: nextHeight
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(preProps) {
      var _this2 = this;

      if (this.isPropChanged('columns', preProps) || this.isPropChanged('style', preProps) || this.isPropChanged('className', preProps)) {
        this.scheduleLayout();
        return;
      }

      var shouldUpdateHeight = ['height', 'maxHeight', 'data', 'store.expandingRows', 'expandRowKeys', 'showSummary', 'summaryMethod', 'sumText'].some(function (key) {
        return _this2.isPropChanged(key, preProps);
      });
      if (shouldUpdateHeight) {
        this.updateHeight();
        this.updateScrollY();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _resizeEvent.removeResizeListener)(this.el, this.resizeListener);
    }
  }, {
    key: 'isPropChanged',
    value: function isPropChanged(key, preProps) {
      var prop = (0, _utils.getValueByPath)(this.props, key);
      var preProp = (0, _utils.getValueByPath)(preProps, key);
      return prop !== preProp;
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        layout: this
      };
    }
  }, {
    key: 'scheduleLayout',
    value: function scheduleLayout() {
      var _this3 = this;

      this.setState(this.caculateWidth(), function () {
        _this3.updateHeight();
        _this3.updateScrollY();
      });
    }

    // horizontal direction layout

  }, {
    key: 'caculateWidth',
    value: function caculateWidth() {
      var _props = this.props,
          _props$tableStoreStat = _props.tableStoreState,
          columns = _props$tableStoreStat.columns,
          fixedColumns = _props$tableStoreStat.fixedColumns,
          rightFixedColumns = _props$tableStoreStat.rightFixedColumns,
          fit = _props.fit;
      var gutterWidth = this.state.gutterWidth;

      var bodyMinWidth = columns.reduce(function (pre, col) {
        return pre + (col.width || col.minWidth);
      }, 0);

      var bodyWidth = this.table.el.clientWidth;
      var scrollX = void 0;
      var fixedWidth = void 0;
      var rightFixedWidth = void 0;

      // mutate props (TableStore's state[columns])
      var flexColumns = columns.filter(function (column) {
        return typeof column.width !== 'number';
      });
      if (flexColumns.length && fit) {
        if (bodyMinWidth < bodyWidth - gutterWidth) {
          // no scroll bar
          scrollX = false;

          var totalFlexWidth = bodyWidth - gutterWidth - bodyMinWidth;
          if (flexColumns.length === 1) {
            flexColumns[0].realWidth = flexColumns[0].minWidth + totalFlexWidth;
          } else {
            var allColumnsWidth = flexColumns.reduce(function (pre, col) {
              return pre + col.minWidth;
            }, 0);
            var flexWidthPerPixel = totalFlexWidth / allColumnsWidth;

            var widthWithoutFirst = 0;

            flexColumns.forEach(function (column, index) {
              if (index === 0) return;
              var flexWidth = Math.floor(column.minWidth * flexWidthPerPixel);
              widthWithoutFirst += flexWidth;
              column.realWidth = column.minWidth + flexWidth;
            });

            flexColumns[0].realWidth = flexColumns[0].minWidth + totalFlexWidth - widthWithoutFirst;
          }
        } else {
          // have horizontal scroll bar
          scrollX = true;
          flexColumns.forEach(function (column) {
            column.realWidth = column.minWidth;
          });
        }

        bodyWidth = Math.max(bodyMinWidth, bodyWidth);
      } else {
        scrollX = bodyMinWidth > bodyWidth;
        bodyWidth = bodyMinWidth;
      }

      if (fixedColumns.length) {
        fixedWidth = fixedColumns.reduce(function (pre, col) {
          return pre + col.realWidth;
        }, 0);
      }

      if (rightFixedColumns.length) {
        rightFixedWidth = rightFixedColumns.reduce(function (pre, col) {
          return pre + col.realWidth;
        }, 0);
      }

      return {
        scrollX: scrollX,
        bodyWidth: bodyWidth,
        fixedWidth: fixedWidth,
        rightFixedWidth: rightFixedWidth
      };
    }

    // vertical direction layout

  }, {
    key: 'updateHeight',
    value: function updateHeight() {
      var _this4 = this;

      this.setState(function (state) {
        var data = _this4.props.data;
        var scrollX = state.scrollX,
            gutterWidth = state.gutterWidth;


        var noData = !data || !data.length;
        var _table = _this4.table,
            headerWrapper = _table.headerWrapper,
            footerWrapper = _table.footerWrapper;


        var tableHeight = _this4.el.clientHeight;
        var headerHeight = headerWrapper ? headerWrapper.offsetHeight : 0;
        var footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0;
        var bodyHeight = tableHeight - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
        var fixedBodyHeight = bodyHeight - (scrollX ? gutterWidth : 0);
        var viewportHeight = tableHeight - (scrollX && !noData ? gutterWidth : 0);

        return {
          tableHeight: tableHeight,
          headerHeight: headerHeight,
          bodyHeight: bodyHeight,
          footerHeight: footerHeight,
          fixedBodyHeight: fixedBodyHeight,
          viewportHeight: viewportHeight // no useful
        };
      });
    }

    // judge if has scroll-Y bar

  }, {
    key: 'updateScrollY',
    value: function updateScrollY() {
      var _this5 = this;

      this.setState(function (state) {
        var bodyWrapper = _this5.table.bodyWrapper;
        var fixedBodyHeight = state.fixedBodyHeight;


        var body = bodyWrapper.querySelector('.r-el-table__body');
        var scrollY = body.offsetHeight > fixedBodyHeight;

        return {
          scrollY: scrollY
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return React.createElement(_Table2.default, (0, _extends3.default)({
        ref: function ref(table) {
          _this6.table = table;
        }
      }, this.props, {
        layout: this.state
      }));
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return TableLayout;
}(_libs.Component);

TableLayout.childContextTypes = {
  layout: _libs.PropTypes.any
};
var _default = TableLayout;
exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TableLayout, 'TableLayout', 'src/table/TableLayout.jsx');
  reactHotLoader.register(_default, 'default', 'src/table/TableLayout.jsx');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();