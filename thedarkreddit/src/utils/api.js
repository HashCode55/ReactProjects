var axios = require('axios');

var URL = 'https://www.reddit.com/r/creepy/new.json?limit=6'
var STORIES_URL = 'https://www.reddit.com/r/nosleep/hot.json?limit=5'

module.exports = {
	getImages: function() {
		return axios.get(URL)
			.then(function(res) {
				return res.data.data.children;
			});
	},

	getStories: function() {
		return axios.get(STORIES_URL)
			.then(function(res) {				
				return res.data.data.children;
			});
	},

	getDummy: function() {
		return ['hello shitty'];
	}
}
