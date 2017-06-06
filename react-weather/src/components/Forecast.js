var React = require('react');
var queryString = require('query-string');
var Loading = require('./Loading');
var api = require('../utils/api');
var PropTypes = require('prop-types');

function WeatherItem(props) {
	console.log(props.icon);
	return (
		<div className='item-container'>
			<img 
				style={{width: '150px', margin:'100px'}}
				src={require('../images/weather-icons/'+ props.icon +'.svg')} 
				alt={props.icon}/>
		</div>
	);
}
function ForecastPreview(props) {
	return (
		<div className='forecast-container'>
			<p>{props.city}</p>
			<div className='weather-container'>
				{props.weather.map(function(w){
					return <WeatherItem icon={w.weather[0].icon}/>
				})}
			</div>		
		</div>
	);
}

ForecastPreview.propTypes = {
	city: PropTypes.string.isRequired,
	weather: PropTypes.array.isRequired
}

class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			weather: null
		}
	}
	componentDidMount() {
		var params = queryString.parse(this.props.location.search);
		// console.log(params.city);
		api.fivedayforecast(params.city)
			.then(function(data){
				console.log(data);
				this.setState({
					city: params.city,
					weather: data});	
			}.bind(this));
	}
	render () {
		var weather = this.state.weather;
		console.log();		
		return (
			<div>
				{weather === null && <Loading />}
				{weather && <ForecastPreview 
								city={this.state.city}
								weather={this.state.weather}
								/>}	
			</div>							
		);
	}
}

module.exports = Forecast;