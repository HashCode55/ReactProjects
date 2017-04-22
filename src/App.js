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

// This syntax is a little bit different 
class NoteFilter extends React.Component {
	render() {
		return (
			<div> This is for filtering the notes. </div>
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

class NodeAdd extends React.Component {
	constructor(props) {
    	super(props);
    	this.handleSubmit= this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		var form = document.forms.noteAdd;
		this.props.addNote({text:form.text.value, votes:4, user_id:form.userid.value,
							board_id:2, tag_one:form.tagone.value, tag_two:form.tagtwo.value});
		console.log("submit called.")
		// clear the form 
		form.text.value = "";
		form.userid.value = "";
		form.tagone.value = "";
		form.tagtwo.value = "";
	}
	render() {
		return (
			// Replace this with a form 
			<div>
		        <form name="noteAdd">
		          <input type="text" name="text" placeholder="text" />
		          <input type="text" name="userid" placeholder="userid" />
		          <input type="text" name="tagone" placeholder="TAG" />
		          <input type="text" name="tagtwo" placeholder="TAG_FUCKER" />
		          <button onClick={this.handleSubmit}>Add Note</button>
		        </form>
	      	</div>
		);
	}	
}

class NoteList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {notes:[]};
	}
	componentDidMount() {
		// Place ajax calls here
		$.ajax('/api/notes').done(function(data) {
	      this.setState({notes: data});
	    }.bind(this));
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
        		<NoteFilter />
        		<hr />
        		<NoteTable notes={this.state.notes}/>
        		<hr />        		
        		<NodeAdd addNote={(note) => this.addNote(note)}/>
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

ReactDOM.render(
	<NoteList/>,
	//<h1>The Central Board</h1>,
	document.getElementById('main')
);
