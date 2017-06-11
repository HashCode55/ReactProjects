var React = require('react');
var Link = require('react-router-dom').Link;

class Header extends React.Component {
	render() {
		return (
			<div className='header-container'>
				<p className='itemcenter'>TheDarkReddit</p>
				<Link to='/visual' className='btn-header-right btn' style={{left:'80%'}}>Visual</Link>
				<Link to='/read' className='btn-header-right btn' style={{left:'90%'}}>Read</Link>
			</div>
		);
	}
}

module.exports = Header;