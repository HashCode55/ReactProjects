var React = require('react');
var PropTypes = require('prop-types');
var helper = require('../utils/helpers')

function WeatherItem(props) {
	var date = helper.getDate(props.item.dt);
	return (
		<div onClick={props.onClick} className='item-container' >			
			<img 
				style={{height: '100px', width: '150px', margin:'40px 100px'}}
				src={require('../images/weather-icons/'+ props.item.weather[0].icon +'.svg')} 
				alt={props.icon}/>			
			<p style={{align:'center'}}>{date}</p>
		</div>
	);
}

WeatherItem.propTypes = {
	item: PropTypes.object.isRequired,
	onClick: PropTypes.func
}

module.exports = WeatherItem;