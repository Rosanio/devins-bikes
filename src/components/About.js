import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="About">
        <div className="devin-image-container" >
          <img className='devin-image' src="https://i.ytimg.com/vi/l6jmu71eVes/maxresdefault.jpg" alt="King Devin" />
        </div>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis sagittis tellus sed blandit. Nam cursus neque faucibus orci congue, eu tristique metus volutpat. In ut arcu tincidunt, blandit quam condimentum, scelerisque lacus. Mauris facilisis eget neque non blandit. Vivamus tempus finibus turpis, eu cursus enim sollicitudin in. Fusce id erat pellentesque, pellentesque nisi quis, vehicula nulla. Vestibulum tempor tempus libero eget luctus. Cras sit amet ex ac sem fermentum sagittis. Praesent fermentum metus at lorem fermentum auctor. Morbi faucibus condimentum dolor eget rhoncus.
        </p>
      </div>
    );
  }
}

export default About;
