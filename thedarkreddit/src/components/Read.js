var React = require('react');
var Header = require('./Header');
var Menu = require('react-burger-menu').slide;
var ReadCard = require('./ReadCard');
var Masonry = require('react-masonry-component');
var api = require('../utils/api');

var masonryOptions = {
    transitionDuration: 0
};

class Read extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stories: []
		}											
	}

	componentDidMount() {
		api.getStories()
			.then(function(res) {
				console.log(res[0].data.selftext);
				// this.setState({stories: res});
			}.bind(this));
	}

	render() {
		const btnstyle = {
			margin:'5px', 
			width:'auto'
	    }
		return (
			<div className='container'>

				<Menu>
					<p className='font-appeal'>FILTERS</p>
					<div className='filter-container'>
						<button className='btn' style={btnstyle}>GORE</button>
						<button className='btn' style={btnstyle}>DEATH</button>
						<button className='btn' style={btnstyle}>HARDCORE</button>
						<button className='btn' style={btnstyle}>ACCIDENTAL</button>
					</div>  
				</Menu>

	            <Header /> 

	            <div className='read-container'>		
					<Masonry
		                className={'masonry-read-container'} 
		                options={masonryOptions} 
		                disableImagesLoaded={false} 
		                updateOnEachImageLoad={false}>                    	               
		            	<ReadCard />		            	
		            	<ReadCard />
		            	<ReadCard />
		            	<ReadCard />
		            	<ReadCard />
		            	<ReadCard />
		            	<ReadCard />
		            	<ReadCard />
		            	<ReadCard />
		            	<ReadCard />
		            	<ReadCard />
		            </Masonry>
		        </div>  	

			</div>
		);
	}
}

module.exports = Read;