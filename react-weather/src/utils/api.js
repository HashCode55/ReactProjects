var axios = require('axios');

// GLOBAL variables 
var API_KEY = '1bc92b1f7ae741ab373039402246d960';
var API_SETUP = '&type=accurate&APPID=' + API_KEY;

module.exports = {
	currentweather: function (cityname) {
		return axios.get(' http://api.openweathermap.org/data/2.5/weather?q=' + cityname + API_SETUP)
			.then(function(res){
				return res;
			});
	},

	fivedayforecast: function (cityname) {
		return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityname + API_SETUP)
			.then(function(res){
				return res.data.list;
			});
	}
}