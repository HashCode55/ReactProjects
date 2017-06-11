var React = require('react');

class ReadCard extends React.Component {
	render() {
		return (
			<div className='read-card-item'>
				<div className='read-card-header'>
					<p className='read-header-title'>This is a sample title</p>
					<p className='read-subr-info'>Dummy Info</p>
				</div>				
				<hr />
				<div className='read-card-body'>
					<p className='read-body-data'>This is dummy data</p>
				</div>
			</div>	
		);
	}
}


module.exports = ReadCard;