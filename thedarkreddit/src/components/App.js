var React = require('react');
var Header = require('./Header');
var Menu = require('react-burger-menu').slide;
var Visual = require('./Visual');

class App extends React.Component {

  render() {
    return (
      <div className="container">        
        <Header />          
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        <Visual />
      </div>
    );
  }
}

export default App;
