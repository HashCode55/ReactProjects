var React = require('react');

class ReadCard extends React.Component {
	render() {
		return (
			<div className='read-card-item'>
				<div className='read-card-header'>
					<p className='read-header-title'>Never Look down.</p>
					<p className='read-subr-info'>/r/nosleep 89% Upvotes</p>
				</div>				
				<div className='read-card-body'>
					<p className='read-body-data'>This is dummy data</p>
				</div>
			</div>	
		);
	}
}


module.exports = ReadCard;