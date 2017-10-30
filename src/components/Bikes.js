import React, {Component} from 'react';
import BikeListElement from './BikeListElement';
import '../css/Bikes.css'

class Bikes extends Component {

  render() {
    if(this.props.bikes !== null && this.props.bikes !== undefined) {
      return (
        <div className="bikes-container">
          {Object.keys(this.props.bikes).map((key) => {
            return <BikeListElement key={key} bike={this.props.bikes[key]} />
          })}
        </div>
      )
    } else {
      return <p>Loading</p>
    }
  }
}

export default Bikes;
