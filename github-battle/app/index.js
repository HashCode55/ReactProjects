// This is the main file. 
// Components should not be defined here.
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');

ReactDOM.render(
	<App />,
	document.getElementById('app')
);