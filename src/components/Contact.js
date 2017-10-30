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
    this.handleChange = this.handleChange.bind(this);
  }

  submitContactRequest(e) {
    e.preventDefault();
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h3>Send us a message</h3>
        <form onSubmit={this.submitContactRequest} >
          <input name="firstName" onChange={this.handleChange} />
          <input name="lastName" onChange={this.handleChange} />
          <input name="email" onChange={this.handleChange} />
          <input name="phone" onChange={this.handleChange} />
          <input name="message" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Contact;
