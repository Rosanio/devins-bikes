import React, {Component} from 'react';
import '../css/BikeListElement.css'

class BikeListElement extends Component {

  render() {
    const bike = this.props.bike;
    return (
      <div className="bike-container">
        <div className="bike-image">
          <img src={bike.image} alt=""/>
        </div>
        <p className="bike-name">{bike.name}</p>
        <p className="bike-price">{'$' + bike.price}</p>
        <p className="bike-description">{bike.description}</p>
      </div>
    )
  }
}

export default BikeListElement;
