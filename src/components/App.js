import React, { Component } from 'react';
import '../css/App.css';
import Home from './Home';
import Bikes from './Bikes';
import firebase from '../firebase';
import Bike from '../models/Bike';
import About from './About'
import Contact from './Contact';

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
    } else if(this.state.currentPage === 'About') {
      currentComponent = <About />;
    } else if(this.state.currentPage === 'Contact') {
      currentComponent = <Contact />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="title-div">
            <img className="App-img" src={require("../bikeSquirrel.png")} alt="Bike Shop Logo" onClick={(e) => this.navigate(e, 'Home')} />
            <h1 className="App-title">Devin's Bikes</h1>
          </div>
          <div className="navContainer">
            <div className={this.state.currentPage==='Bikes' ? "navElement selected" : "navElement"} onClick={(e) => this.navigate(e, 'Bikes')} >
              <p>Bikes</p>
            </div>
            <div className={this.state.currentPage==='About' ? "navElement selected" : "navElement"} onClick={(e) => this.navigate(e, 'About')} >
              <p>About</p>
            </div>
            <div className={this.state.currentPage==='Contact' ? "navElement selected" : "navElement"} onClick={(e) => this.navigate(e, 'Contact')}>
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
