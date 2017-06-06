var React = require('react');
var queryString = require('query-string');
var Loading = require('./Loading');
var api = require('../utils/api');
var WeatherItem = require('./WeatherItem');

class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			weather: null
		}
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		var params = queryString.parse(this.props.location.search);
		// console.log(params.city);
		this.city = params.city;
		api.fivedayforecast(params.city)
			.then(function(data){
				this.setState({
					city: params.city,
					weather: data});	
			}.bind(this));
	}

	handleClick(city) {
		city.city = this.city;
		console.log('pushing...');
		this.props.history.push({
			pathname: '/display/' + this.city,
			state: city
		});
	}

	render () {
		var weather = this.state.weather;
		console.log();		
		return (
			<div>
				{weather === null && <Loading />}
				{weather && 
					<div className='forecast-container'>
						<p>{this.state.city}</p>
						<div className='weather-container'>
							{this.state.weather.map(function(w){
								return <WeatherItem key={w.dt} item={w} onClick={this.handleClick.bind(null, w)}/>
							}.bind(this))}
						</div>		
					</div>
				}	
			</div>							
		);
	}
}

module.exports = Forecast;