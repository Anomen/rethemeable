'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeContextTypes = undefined;
exports.makeThemeContext = makeThemeContext;
exports.getThemeContext = getThemeContext;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CONTEXTKEY = '@@themeable';

var ThemeContextTypes = exports.ThemeContextTypes = _defineProperty({}, CONTEXTKEY, _propTypes2.default.object);

function makeThemeContext(theme) {
  return _defineProperty({}, CONTEXTKEY, theme);
}

function getThemeContext(context) {
  return context ? context[CONTEXTKEY] : undefined;
}
