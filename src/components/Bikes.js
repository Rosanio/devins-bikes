import React, {Component} from 'react';
import Bike from '../models/Bike';

class Bikes extends Component {

  componentDidMount() {
    let bike = new Bike("Matt's Bike", "My bike", 1000, 'http://google.com');
    console.log(bike);
  }

  render() {
    return (
      <div>
        <p>Bikes go here</p>
      </div>
    )
  }
}

export default Bikes;
