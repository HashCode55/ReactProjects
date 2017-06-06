var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

// TODO: props.history 
class CityInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange (event) {
		this.setState({text: event.target.value});
	} 

	handleClick () {
		this.setState({text: ''})
	}

	render () {
		return (
			<div 
				className='cityinput-container'
				style={{flexDirection: this.props.direction}}
				>
				<input
					className='form-control'
					type='text'
					value={this.state.text}
					onChange={this.handleChange}
					> 
				</input>
				<Link 
					role='button'
					className='btn btn-success'
					to={{
						pathname: '/forecast',
						search: '?city='+this.state.text
					}}
					style={{margin: "15px"}}					
					onClick={this.handleClick}
				>
					Get Weather
				</Link>
			</div>
		);
	}
}

CityInput.defaultProps = {
	direction: 'column'
}

CityInput.propTypes = {
	direction: PropTypes.string.isRequired
}

module.exports = CityInput;