var React = require('react');
var Header = require('./Header');
var Menu = require('react-burger-menu').slide;
var ReadCard = require('./ReadCard');
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: 0
};

class Read extends React.Component {
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
		                className={''} 
		                options={masonryOptions} 
		                disableImagesLoaded={false} 
		                updateOnEachImageLoad={false}>                    	               
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