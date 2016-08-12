var http = require('http'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server');
 import  App  from './app';
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
  console.log('.');
  res.setHeader('Content-Type', 'text/html');
    var props = {
      items: [
        'Item 0',
        'Item 1'
      ]
    };
    var html = ReactDOMServer.renderToStaticMarkup(
      <body>
        <div id="content" dangerouslySetInnerHTML={{__html:
          ReactDOMServer.renderToString(<App items={props.items}/>)
        }} />

        <script dangerouslySetInnerHTML={{__html:
        'var APP_PROPS = ' + JSON.stringify(props) + ';'
        }}/>
        <script src="./dist/manifest.js"/>
        <script src="./dist/lib.js"/>
        <script src="./dist/app.js"/>
      </body>
    );
    res.end(html);
});
app.listen(3000,function(){
  console.log('open href http://localhost:3000');
});