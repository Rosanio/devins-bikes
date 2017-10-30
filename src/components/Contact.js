import React, { Component } from 'react';
// import '../css/About.css';

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    };

    this.submitContactRequest = this.submitContactRequest.bind(this);
  }

  submitContactRequest(e) {
    e.preventDefault();
  }

  render() {
    console.log("contact rendered");
    return (
      <div>
        <h3>Send us a message</h3>
        <form onSubmit={this.submitContactRequest} >

        </form>
      </div>
    );
  }
}

export default Contact;
