var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');
var CityInput = require('./CityInput');
var Forecast = require('./Forecast');
var Display = require('./Display');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
  // Top level routes live here! 
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
          <Route path='/display' component={Display} />
          <Footer />
        </div>
      </Router>  
    );
  }
}

module.exports = App;
