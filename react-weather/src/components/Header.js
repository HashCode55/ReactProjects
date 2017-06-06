var React = require('react');
var CityInput = require('./CityInput');

function Header(props) {	
		return (
			<div className='header-container'>
					<h1 style={{margin: '15px'}}>Weathershek</h1>	
					<CityInput 
						direction='row'
					/>			
			</div>
		);
}

module.exports = Header;