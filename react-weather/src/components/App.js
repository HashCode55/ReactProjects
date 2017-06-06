var React = require('react');
var Header = require('./Header');
var CityInput = require('./CityInput');
var Forecast = require('./Forecast');

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
  render() {
    return (
  	  <Router>
        <div className='container'> 
          <Header />
          <Route exact path='/' render={function () {
            return (
              <div className='home-container'>   
                <h1 className='header'>Enter a city and a state</h1>
                <CityInput />
              </ div> 
            ); 
          }} />
          <Route path='/forecast' component={Forecast} />
        </div>
      </Router>  
    );
  }
}

module.exports = App;
