webpackJsonp([9],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(202);


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcSteps = __webpack_require__(185);
	
	var _rcSteps2 = _interopRequireDefault(_rcSteps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var container = document.getElementById('__react-content');
	
	var steps = [{
	  status: 'finish',
	  title: '已完成'
	}, {
	  status: 'process',
	  title: '进行中'
	}, {
	  status: 'wait',
	  title: '待运行'
	}, {
	  status: 'wait',
	  title: '待运行'
	}].map(function (s, i) {
	  return _react2.default.createElement(_rcSteps.Step, {
	    key: i,
	    status: s.status,
	    title: s.title
	  });
	});
	
	_reactDom2.default.render(_react2.default.createElement(
	  _rcSteps2.default,
	  { size: 'small' },
	  steps
	), container);

/***/ })

});
//# sourceMappingURL=smallSize.js.map