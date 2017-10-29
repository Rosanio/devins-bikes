import React, {Component} from 'react';
import Bike from '../models/Bike';
import BikeListElement from './BikeListElement';
import '../css/Bikes.css'

class Bikes extends Component {

  componentDidMount() {
    console.log(this.props.bikes);
  }

  render() {
    return (
      <div className="bikes-container">
        {Object.keys(this.props.bikes).map((key) => {
          return <BikeListElement key={key} bike={this.props.bikes[key]} />
        })}
      </div>
    )
  }
}

export default Bikes;
