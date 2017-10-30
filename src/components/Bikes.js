import React, {Component} from 'react';
import BikeListElement from './BikeListElement';
import '../css/Bikes.css'

class Bikes extends Component {

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
