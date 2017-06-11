var React = require('react');
var VisualCard = require('./VisualCard');
var Masonry = require('react-masonry-component');
var api = require('../utils/api');
var Header = require('./Header');
var Menu = require('react-burger-menu').slide;

var masonryOptions = {
    transitionDuration: 0
};

class Visual extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			bottom: false
		}		
		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
	    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
	    const body = document.body;
	    const html = document.documentElement;
	    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
	    const windowBottom = windowHeight + window.pageYOffset;
	    if (windowBottom >= docHeight) {
	      this.setState({
	        bottom: true
	      });
	    } else {
	      this.setState({
	        bottom: false
	      });
	    }
	}

	componentWillUnmount() {
	    window.removeEventListener("scroll", this.handleScroll);
	}

	componentDidMount() {		
		window.addEventListener('scroll', this.handleScroll);
		// api.getImages()
		// 	.then(function(res){
		// 		var imgs = res.map(function(i){
		// 			return i.data.url;
		// 		});				
		// 		this.setState(function(){
		// 			return {images: imgs};
		// 		});
		// 	}.bind(this));
		// {this.state.images.map(function(img_url){
                // 		return <VisualCard image={img_url}/>;
                // })}
	}

	addImages() {
		// api.getImages()
		// 	.then(function(res){
		// 		var imgs = res.map(function(i){
		// 			return i.data.url;
		// 		});	

		// 		this.setState(function(){					
		// 			var previmages = this.state.images;
		// 			previmages.push(...imgs)
		// 			return {images: previmages};
		// 		});
		// 	}.bind(this));

	}

	render() {
		const btnstyle = {
			margin:'5px', 
			width:'auto'
	    }
		console.log(this.state);
		var bottom = this.state.bottom;		         	
		if (bottom) {
			this.addImages();
		}
		return (
		<div>			
		
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

			<div className='visual-container'>		
				<Masonry
	                className={''} 
	                options={masonryOptions} 
	                disableImagesLoaded={false} 
	                updateOnEachImageLoad={false}>                    	               
	            	<VisualCard />
	            </Masonry>
	        </div>  

		</div>	        
		);
	}
}

module.exports = Visual;