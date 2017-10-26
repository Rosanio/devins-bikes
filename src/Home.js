import React, { Component } from 'react';
import './App.css';
import {Carousel} from 'react-materialize';

class Home extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="Home">
        <p className="App-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis sagittis tellus sed blandit. Nam cursus neque faucibus orci congue, eu tristique metus volutpat. In ut arcu tincidunt, blandit quam condimentum, scelerisque lacus. Mauris facilisis eget neque non blandit. Vivamus tempus finibus turpis, eu cursus enim sollicitudin in. Fusce id erat pellentesque, pellentesque nisi quis, vehicula nulla. Vestibulum tempor tempus libero eget luctus. Cras sit amet ex ac sem fermentum sagittis. Praesent fermentum metus at lorem fermentum auctor. Morbi faucibus condimentum dolor eget rhoncus.
        </p>
        <Carousel options={{dist: -100, padding: 60}}>
          <a href="https://google.com" >
            <img className="bike-carousel-image" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/300px-Left_side_of_Flying_Pigeon.jpg' />
          </a>
          <a href="https://google.com" >
            <img className="bike-carousel-image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2KCtV2Gf6tDLBGaH9mI1a2XO21D-qwYJoyrlme4V7WMZicYR' />
          </a>
          <a href="https://google.com" >
            <img className="bike-carousel-image" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Loaded_touring_bicycle.JPG/220px-Loaded_touring_bicycle.JPG' />
          </a>
          <a href="https://google.com">
            <img className="bike-carousel-image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT899A48f88wRTnZVsAsSYn5EzmWX4i0ImlCernzPlsSkrlDtl' />
          </a>
          <a href="https://google.com">
            <img className="bike-carousel-image" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Michauxjun.jpg/200px-Michauxjun.jpg' />
          </a>
        </Carousel>
      </div>
    );
  }
}

export default Home;
