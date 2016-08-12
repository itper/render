'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = require('http'),
    browserify = require('browserify'),
    literalify = require('literalify'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server');

var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
  console.log('.');
  res.setHeader('Content-Type', 'text/html');
  var props = {
    items: ['Item 0', 'Item 1']
  };
  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(
    'body',
    null,
    React.createElement('div', { id: 'content', dangerouslySetInnerHTML: { __html: ReactDOMServer.renderToString(React.createElement(_app2.default, { items: props.items }))
      } }),
    React.createElement('script', { dangerouslySetInnerHTML: { __html: 'var APP_PROPS = ' + JSON.stringify(props) + ';'
      } }),
    React.createElement('script', { src: './dist/lib.js' }),
    React.createElement('script', { src: './dist/app.js' })
  ));
  res.end(html);
});
app.listen(3000, function () {
  console.log('123123');
});