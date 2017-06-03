/**
	* Author:    hashcode55 (Mehul Ahuja)
	* Created:   22.04.2017
	*
	* babel src/App.js --out-file static/App.js 
	* Use the above line to watch the src folder to 
	* sync changes in the static folder.
	*	
	* Virtual DOM updates always when render() is called. 
	* Native DOM - React changes real DOM nodes in your browser only if they were 
	* changed in the Virtual DOM and as little as needed
	*
	* If you use an ES6 class that extends React.Component, 
	* then you should use a constructor() instead of getInitialState
**/
var React = require('react');
var ReactDOM = require('react-dom');
var NoteList = require('./NoteList');

ReactDOM.render(
	<NoteList/>,
	//<h1>The Central Board</h1>,
	document.getElementById('main')
);
