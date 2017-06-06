var React = require('react');
var WeatherItem = require('./WeatherItem');

class Display extends React.Component {	
	render() {
		var props = this.props.location.state;
		return (
			<div className='display-container'>
				<p style={{textTransform: 'uppercase', fontSize: '40px'}}>{props.city}</p>
				<WeatherItem item={props}/>
				<p>{props.weather[0].description}</p>
				<p>Minimum Temp: {props.temp.min}</p>
				<p>Maximum Temp: {props.temp.max}</p>
				<p>Humidity: {props.humidity}</p>				
			</div>
			);
	}
}


module.exports = Display;