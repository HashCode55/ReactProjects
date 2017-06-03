var axios = require('axios');

function getProfile(username) {
	// axios get returns a promise
	// a promise has a property 'then' which is called when 
	// we get a response 
	// 'user' is a response here

	// we are just chaining then to format the data returned 
	return axios.get('http://api.github.com/users/' + username)
		.then(function (user){
			return user.data;
		});
}

function getRepos(username) {
	// gets the repos for a particular user
	return axios.get('http://api.github.com/users/' + username + '/repos')		
}

function getStarCount(repos) {
	// gets the total stars over all the repositories
	return repos.data.reduce(function(count, repo){
		return count + repo.stargazers_count;
	}, 0);
}

function calculateScore(profile, repos) {
	var followers = profile.followers;
	var totalStars = getStarCount(repos);
	return (followers * 3) + totalStars;
}

function handleError(error) {
	console.log(error);
	return null;
}

function getUserData(player) {
	// perform composition 
	// what 'all' does is that it 
	// calls 'then' when all the promises 
	// in the array have returned

	// async call to get data 
	return axios.all([
		getProfile(player),
		getRepos(player)
	]).then(function(data) {
		// now the data is an array with 
		// elements in being order of called GET
		// requests
		var profile = data[0];
		var repos = data[1];
		return {
			profile: profile,
			score: calculateScore(profile, repos)
		}
	});
}

function sortPlayers(players) {
	return players.sort(function(a, b) {
		return b.score - a.score;
	});
}
module.exports = {
	battle: function(players) {
		// once we get the response back from the promises
		// chain it to sortPlayers
		return axios.all(players.map(getUserData))
			.then(sortPlayers)
			.catch(handleError);
	},
	fetchPopularRepos: function(language) {
		// make github api request 
		var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ 
			language + '&sort=stars&order=desc&type=Repositories');
		return axios.get(encodedURI)
			.then(function(response){
				return response.data.items;
			})
	}	
}
