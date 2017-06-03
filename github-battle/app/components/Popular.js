var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

// Separate the logic of state and UI. 
// This is how React makes your life easier. 

function SelectLanguage(props) {
	// Stateless Functional Component 
	// as obviously it doesn't has any state.
	var languages = ['All', 'Javascript', 'Ruby', 'Java', 'Golang', 'Python'];	
	// set state should not be invoked from render method to maintain the 
	// purity of function. 
	return (
		<ul className='languages'>			
			{				
				languages.map(function(lang){
					return (
						<li 
							style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
							onClick={props.onSelect.bind(null, lang)}
							key={lang}>
							{lang}
						</li>
						)
				}) // map takes another argument for context
			}			
		</ul>
	);
}

function RepoGrid(props) {
	return (
		<ul className='popular-list'>
			{props.repos.map(function(repo, index) {
				return (
					<li key={repo.name} className='popular-item'>
						<div className='popular-rank'>#{index + 1}</div>
						<ul className='space-list-items'>
							<li>
								<img
									className='avatar'
									src={repo.owner.avatar_url}
									alt={'Avatar for' + repo.owner.login}
								/>								
							</li>
							<li><a href={repo.html_url}>{repo.name}</a></li>
							<li>@{repo.owner.login}</li>
							<li>{repo.stargazers_count} stars</li>
						</ul>
					</li>
				);
			})}
		</ul>
	);
}

RepoGrid.propTypes = {
	repos: PropTypes.array.isRequired
}
SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {	
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		};
		// bind "this" so that it works inside the below 
		// function 
		this.updateLanguage = this.updateLanguage.bind(this);
	}	
	componentDidMount() {
		// Make AJAX calls here 
		this.updateLanguage(this.state.selectedLanguage);
	}
	updateLanguage(lang) {
		this.setState(function() {
			return {
				selectedLanguage: lang,
				repos: null
			}
		});
		// fetch the popular repos for the updated language 
		// and update the state 
		api.fetchPopularRepos(lang)
			.then(function(repos){
				this.setState(function() {
					return {
						repos: repos
					}
				});
			}.bind(this));
	}

	// render => "How does my UI look like"
	render() {
		return (
			<div>
				<SelectLanguage
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
				{!this.state.repos
					? <p>Loading...</p>
					: <RepoGrid repos={this.state.repos}/>
				}
			</div>	
		)
	}
}

// export the component
module.exports = Popular;