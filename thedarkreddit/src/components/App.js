var React = require('react');
var Header = require('./Header');
var Menu = require('react-burger-menu').slide;
var Visual = require('./Visual');

class App extends React.Component {

  render() {
    return (
      <div className="container">        
        <Menu>
          <p className='font-appeal'>FILTERS</p>
            <div className='filter-container'>
              <button className='filter-btn btn-success'>GORE</button>
              <button className='filter-btn btn-success'>DEATH</button>
              <button className='filter-btn btn-success'>HARDCORE</button>
              <button className='filter-btn btn-success'>ACCIDENTAL</button>
            </div>  
        </Menu>
        <Header />          
        
        <Visual />
      </div>
    );
  }
}

export default App;
