var React = require('react');
var Visual = require('./Visual');
var Read = require('./Read');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;



class App extends React.Component {  
  render() {    
    return (
      <Router>
        <div className="container">        

          <Route exact path='/' render={function() {
            return (
              <div className='home-container'>
                <p className='home-heading'>THE DARK REDDIT</p>
                <div>
                  <Link role='button' to='/visual' className='btn' style={{margin:'5px', padding:'15px 35px'}}>Visual</Link>                
                  <Link role='button' to='/read' className='btn' style={{margin:'5px', padding:'15px 35px'}}>Read</Link>                
                </div>  
              </div>
            );
          }} />

          <Route path='/visual' component={Visual} />

          <Route path='/read' component={Read} />

        </div>
      </Router>  
    );
  }
}

export default App;
