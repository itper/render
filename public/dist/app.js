webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _app = __webpack_require__(160);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log('123123');
	_reactDom2.default.render(_react2.default.createElement(_app2.default, { items: window.APP_PROPS.items }), document.getElementById('content'));

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

	    _this.render = _this.render.bind(_this);
	    _this.state = {
	      items: _this.props.items,
	      disabled: true
	    };
	    console.log('con');
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({
	        disabled: false
	      });
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      this.setState({
	        items: this.state.items.concat('Item ' + this.state.items.length)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log('render');
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.handleClick.bind(this), disabled: this.state.disabled },
	          'Add Item'
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.state.items.map(function (item) {
	            return _react2.default.createElement(
	              'li',
	              null,
	              item
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = App;
	;

/***/ }

});