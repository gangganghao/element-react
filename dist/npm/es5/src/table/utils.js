'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkType = exports.deepCompare = exports.cleanScrollBar = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.getScrollBarWidth = getScrollBarWidth;
exports.getValueByPath = getValueByPath;
exports.getRowIdentity = getRowIdentity;
exports.getLeafColumns = getLeafColumns;
exports.getColumns = getColumns;
exports.convertToRows = convertToRows;

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _document = document;

var scrollBarWidth = void 0;

var cleanScrollBar = exports.cleanScrollBar = function cleanScrollBar() {
  document.querySelectorAll('.r-el-table__body-wrapper').forEach(function (el) {
    setTimeout(function () {
      el.style.overflow = 'hidden';
      setTimeout(function () {
        return el.style.overflow = 'auto';
      });
    });
  });
};

function getScrollBarWidth() {
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  var dom = _document.createElement('div');
  var body = _document.body || dom;

  dom.style.visibility = 'hidden';
  dom.style.width = '100px';
  dom.style.position = 'absolute';
  dom.style.top = '-9999px';
  dom.style.overflow = 'scroll';

  body.appendChild(dom);

  var totalWidth = dom.offsetWidth;
  var widthWithoutScroll = dom.clientWidth;

  body.removeChild(dom);

  return totalWidth - widthWithoutScroll;
}

function getValueByPath(data, path) {
  if (typeof path !== 'string') return null;
  return path.split('.').reduce(function (pre, cur) {
    return (pre || {})[cur];
  }, data);
}

function getRowIdentity(row, rowKey) {
  if (typeof rowKey === 'string') {
    return getValueByPath(row, rowKey);
  } else if (typeof rowKey === 'function') {
    return rowKey(row);
  }
}

function getLeafColumns(columns) {
  var result = [];
  columns.forEach(function (column) {
    if (column.subColumns) {
      result.push.apply(result, (0, _toConsumableArray3.default)(getLeafColumns(column.subColumns)));
    } else {
      result.push(column);
    }
  });
  return result;
}

function convertChildrenToColumns(children) {
  return React.Children.map(children, function (child) {
    if (child.type.typeName !== 'TableColumn') {
      console.warn('Table component\'s children must be TableColumn, but received ' + child.type);
      return {};
    }

    var column = Object.assign({}, child.props);
    if (column.children) {
      column.subColumns = convertChildrenToColumns(column.children);
      delete column.children;
    }
    return column;
  });
}

function getColumns(props) {
  return props.children ? convertChildrenToColumns(props.children) : props.columns || [];
}

function convertToRows(columns) {
  var maxLevel = 1;

  function traverse(column, parent) {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    } else {
      column.level = 1;
    }

    if (column.subColumns) {
      var colSpan = 0;
      column.subColumns.forEach(function (subColumn) {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  }

  columns.forEach(function (column) {
    traverse(column);
  });

  var rows = [];
  for (var i = 0; i < maxLevel; i++) {
    rows.push([]);
  }

  var allColumns = [];
  var queue = columns.slice();
  for (var _i = 0; queue[_i]; _i++) {
    allColumns.push(queue[_i]);
    if (queue[_i].subColumns) queue.push.apply(queue, (0, _toConsumableArray3.default)(queue[_i].subColumns));
  }

  allColumns.forEach(function (column) {
    if (!column.subColumns) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
    }
    rows[column.level - 1].push(column);
  });
  return rows;
}

var checkType = function checkType(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
};

var deepCompare = function deepCompare(obj1, obj2) {
  var obj1Type = checkType(obj1);
  var obj2Type = checkType(obj2);
  if (obj1Type !== obj2Type) return false;

  if (obj1Type === 'array' && obj1.length === obj2.length) {
    return obj1.every(function (value, key) {
      return deepCompare(value, obj2[key]);
    });
  }

  if (obj1Type === 'object') {
    for (var key in obj1) {
      if (!Object.keys(obj2).includes(key)) return false;
      return deepCompare(obj1[key], obj2[key]);
    }
    return false;
  }
  return Object.is(obj1, obj2);
};

exports.deepCompare = deepCompare;
exports.checkType = checkType;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_document, '_document', 'src/table/utils.js');
  reactHotLoader.register(scrollBarWidth, 'scrollBarWidth', 'src/table/utils.js');
  reactHotLoader.register(cleanScrollBar, 'cleanScrollBar', 'src/table/utils.js');
  reactHotLoader.register(getScrollBarWidth, 'getScrollBarWidth', 'src/table/utils.js');
  reactHotLoader.register(getValueByPath, 'getValueByPath', 'src/table/utils.js');
  reactHotLoader.register(getRowIdentity, 'getRowIdentity', 'src/table/utils.js');
  reactHotLoader.register(getLeafColumns, 'getLeafColumns', 'src/table/utils.js');
  reactHotLoader.register(convertChildrenToColumns, 'convertChildrenToColumns', 'src/table/utils.js');
  reactHotLoader.register(getColumns, 'getColumns', 'src/table/utils.js');
  reactHotLoader.register(convertToRows, 'convertToRows', 'src/table/utils.js');
  reactHotLoader.register(checkType, 'checkType', 'src/table/utils.js');
  reactHotLoader.register(deepCompare, 'deepCompare', 'src/table/utils.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();