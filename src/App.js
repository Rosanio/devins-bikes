import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Bikes from './Bikes';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 'Bikes'
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(e, page) {
    this.setState({currentPage: page});
  }

  render() {
    let currentComponent = null;
    if(this.state.currentPage === 'Home') {
      currentComponent = <Home />;
    } else if(this.state.currentPage === 'Bikes') {
      currentComponent = <Bikes />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="title-div">
            <img className="App-img" src="https://static1.squarespace.com/static/5855ca6d414fb58cb9edc101/t/58596c92e3df28f333130058/1482255510310/yellowsquirrel.png" alt="Bike Shop Logo" onClick={(e) => this.navigate(e, 'Home')} />
            <h1 className="App-title">Devin's Bike Shop</h1>
          </div>
          <div className="navContainer">
            <div className="navElement" >
              <p>Bikes</p>
            </div>
            <div className="navElement">
              <p>About</p>
            </div>
            <div className="navElement">
              <p>Contact</p>
            </div>
          </div>
        </header>
        {currentComponent}
      </div>
    );
  }
}

export default App;
