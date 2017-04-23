/**
	* Author:    hashcode55 (Mehul Ahuja)
	* Created:   22.04.2017
**/

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var NoteFilter = require('./NoteFilter');
var NoteAdd = require('./NoteAdd');

class NoteList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {notes:[]};
		this.loadData= this.loadData.bind(this);
	}
	loadData(filter) {
		// filter is an object containing data to cook the query. 	
		$.ajax('/api/notes', {data:filter}).done(function(data) {
	      this.setState({notes: data});
	    }.bind(this));
	}
	componentDidMount() {
		// Place ajax calls here
		this.loadData({});
	}
	addNote(note) {
		console.log("Adding note...")		
		$.ajax({
			type: 'POST', url: '/api/notes', contentType: 'application/json',
			data: JSON.stringify(note),
			success: function(data){
				// when its done adding it returns the data! 
				var note = data;
				var notesModified = this.state.notes.concat(note);
				this.setState({notes:notesModified});
				console.log("Note succefully added!");
			}.bind(this),
			error: function(){
				// we don't need a bind here as its not accessing the class 
				// variables.
				console.log("Error adding the note to the database.");
			}
		});				
	}
	render() {
		return (
      		<div>
        		<h1>The Central Board</h1>
        		<NoteFilter submitHandler={this.loadData}/>
        		<hr />
        		<NoteTable notes={this.state.notes}/>
        		<hr />        		
        		<NoteAdd addNote={(note) => this.addNote(note)}/>
      		</div>
    	);
	}
}


class NoteRow extends React.Component {
	render () {
		return (
			<tr>
				<td>{this.props.note.post_id}</td>
				<td>{this.props.note.text}</td>
				<td>{this.props.note.time}</td>
				<td>{this.props.note.votes}</td>
				<td>{this.props.note.user_id}</td>
				<td>{this.props.note.board_id}</td>
				<td>{this.props.note.tag_one}</td>
				<td>{this.props.note.tag_two}</td>
			</tr>
		);
	}
}


class NoteTable extends React.Component {
	render() {
		// notes are passed from Notelist 
		var noteRows = this.props.notes.map(function(note){
			// passing the complete object becasue all attributes are of use 
			return <NoteRow key={note.id} note={note}/>
		});
		return (
			<table>
				<thead>
					<tr>
			            <th>Id</th>
			            <th>Status</th>
			            <th>Priority</th>
			            <th>Owner</th>
			            <th>Title</th>
		          	</tr>
		        </thead>
		        <tbody>
			        {noteRows}
		        </tbody>
			</table>
		);
	}
}

module.exports = NoteList;
