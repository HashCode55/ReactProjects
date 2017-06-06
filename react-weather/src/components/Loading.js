var React = require('react');

class Loading extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Loading'
		}
	}

	componentDidMount() {
		var stopper = this.state.text + '...';
		this.interval = window.setInterval(function (){
			if(this.state.text === stopper) {
				this.setState({text: 'Loading'});
			} else {
				this.setState(function(prevState) {
					return {
						text: prevState.text + '.'
					}
				});
			}
		}.bind(this), 300);	
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	render() {
		return (
			<h3 style={{textAlign: 'center'}}>{this.state.text}</h3>
		);
	}
}

module.exports = Loading;