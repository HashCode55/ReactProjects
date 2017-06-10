var axios = require('axios');

var URL = 'https://www.reddit.com/r/creepy/new.json?limit=6'

module.exports = {
	getImages: function() {
		return axios.get(URL)
			.then(function(res) {
				return res.data.data.children;
			});
	},

	getDummy: function() {
		return ['hello shitty'];
	}
}
