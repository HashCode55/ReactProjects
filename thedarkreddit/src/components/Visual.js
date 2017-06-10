var React = require('react');
var Card = require('./Card');
var Masonry = require('react-masonry-component');


var masonryOptions = {
    transitionDuration: 0
};

class Visual extends React.Component {
	render() {
		return (
			<Masonry
                className={'visual-container'} 
                options={masonryOptions} 
                disableImagesLoaded={false} 
                updateOnEachImageLoad={false} 
            >
                <Card />
				<Card image='http://brianjohnsondesign.com/wp-content/uploads/2013/03/MajesticShip.jpg'/>
				<Card />
				<Card image='http://brianjohnsondesign.com/wp-content/uploads/2013/03/MajesticShip.jpg'/>
				<Card />
            </Masonry>
		);
	}
}

module.exports = Visual;