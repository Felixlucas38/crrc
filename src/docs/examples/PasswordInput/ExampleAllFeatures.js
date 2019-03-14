import React, { Component } from 'react';
import PasswordInput from 'crrc/PasswordInput';

/** All features enabled */
export default class ExampleAllFeatures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ''
    };
  }

  getQuality = () => {
    const { password } = this.state;
    return password.length > 10 ? 100 : password.length * 10;
  };

  render() {
    return (
      <PasswordInput
        htmlId="password-input-example-all-features"
        name="password"
        onChange={e => this.setState({ password: e.target.value })}
        value={this.state.password}
        minLength={8}
        placeholder="Enter password"
        showVisibilityToggle
        quality={this.getQuality()}
        {...this.props}
      />
    );
  }
}
