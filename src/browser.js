import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
console.log('123123');
ReactDOM.render(<App items={window.APP_PROPS.items} />, document.getElementById('content'));
