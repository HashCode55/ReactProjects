/**
	* Author:    hashcode55 (Mehul Ahuja)
	* Created:   22.04.2017
	*
	* Empty values in the filter are automatically handled by
	* ajax.
**/

var React = require('react');
var ReactDOM = require('react-dom');

class NoteFilter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {tag:""};
		// bind this to functions
		this.handleFilter = this.handleFilter.bind(this);
		this.onChangeTag= this.onChangeTag.bind(this);
	}
	handleFilter() {
		this.props.submitHandler({tag:this.state.tag});
	}	
	onChangeTag(e) {
		this.setState({tag:e.target.value});
	}
	render() {
		return (
			<div> 
				<h3>Filter</h3>
				Tag:
				<select value={this.state.tag} onChange={this.onChangeTag}>
					<option value="">(Any)</option>
					<option value="CML">CML</option>
					<option value="ECE">ECE</option>
					<option value="RANT">RANT</option>
				</select>
				<button onClick={() => this.handleFilter()}>
					Filter
				</button>
			</div>
			);
	}
}

module.exports = NoteFilter;