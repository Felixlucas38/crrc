import React, { Component } from 'react';
import RegistrationForm from 'crrc/RegistrationForm';

export default class ExampleRegistrationForm extends Component {
  onSubmit = user => {
    console.log('user', user);
  };
  render() {
    return <RegistrationForm onSubmit={this.onSubmit} />;
  }
}
