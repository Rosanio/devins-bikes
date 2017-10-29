import React, { Component } from 'react';
import '../css/App.css';
import Home from './Home';
import Bikes from './Bikes';
import firebase from '../firebase';
import Bike from '../models/Bike';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 'Home'
    };

    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
    const bikesRef = firebase.database().ref('bikes');
    bikesRef.on('value', (snapshot) => {
      let bikes = snapshot.val();
      let bikesState = [];
      for(let bikeId in bikes) {
        let bike = bikes[bikeId];
        bikesState.push(new Bike(bike.name, bike.price, bike.description, bike.image));
      }
      this.setState({
        bikes: bikesState
      });
    })
  }

  navigate(e, page) {
    this.setState({currentPage: page});
  }

  render() {
    let currentComponent = null;
    if(this.state.currentPage === 'Home') {
      currentComponent = <Home />;
    } else if(this.state.currentPage === 'Bikes') {
      currentComponent = <Bikes bikes={this.state.bikes} />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="title-div">
            <img className="App-img" src={require("../bikeSquirrel.png")} alt="Bike Shop Logo" onClick={(e) => this.navigate(e, 'Home')} />
            <h1 className="App-title">Devin's Bikes</h1>
          </div>
          <div className="navContainer">
            <div className="navElement" onClick={(e) => this.navigate(e, 'Bikes')} >
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
