var React = require('react');

class Card extends React.Component {
	render() {
		return (
			<div className='card-item'>
				<img 
					className='card-image'
					src={this.props.image}
					alt='death bitch'
				/>	
				<div className='card-info'>
					<p>This is some sample info.</p>
				</div>
			</div>	
		);
	}
}

Card.defaultProps = {
	image: 'https://thumb1.shutterstock.com/display_pic_with_logo/879871/161602460/stock-photo-empty-road-with-dead-body-in-the-middle-at-night-161602460.jpg'
}
module.exports = Card;