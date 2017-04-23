/**
	* Author:    hashcode55 (Mehul Ahuja)
	* Created:   22.04.2017
**/

var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('react-bootstrap/lib/Button')

class NoteAdd extends React.Component {
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
		          <Button bsStyle="success" onClick={this.handleSubmit}>Add Note</Button>
		        </form>
	      	</div>
		);
	}	
}

module.exports = NoteAdd;
