import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput/PasswordInput';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        password: ''
      },
      errors: {},
      submitted: false
    };
  }

  onChange = e => {
    const { user } = this.state;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  // Returns a number from 0 to 100 that represents password quality
  // For simplicity, just returning % of min length entered.
  // Could enhance with checks for number, special char, unique characters, etc.
  passwordQuality = password => {
    const { minPasswordLength } = this.props;

    if (!password) return null;

    if (password.length >= minPasswordLength) return 100;

    return parseInt((password.length / minPasswordLength) * 100, 10);
  };

  validate = ({ email, password }) => {
    const errors = {};
    const { minPasswordLength } = this.props;

    if (!email) errors.email = 'Email required';
    if (password.length < minPasswordLength)
      errors.password = `Password must be at least ${minPasswordLength} characters.`;

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.state;
    const formIsValid = this.validate(user);

    if (formIsValid) {
      this.props.onSubmit(user);
      this.setState({ submitted: true });
    }
  };

  render() {
    const { errors, submitted } = this.state;
    const { email, password } = this.state.user;
    const { confirmationMessage } = this.props;

    return submitted ? (
      <h2>{confirmationMessage}</h2>
    ) : (
      <form noValidate onSubmit={this.onSubmit}>
        <TextInput
          htmlId="registration-form-email"
          name="email"
          label="Email"
          value={email}
          onChange={this.onChange}
          error={errors.email}
          required
        />
        <PasswordInput
          htmlId="registration-form-password"
          name="password"
          showVisibilityToggle
          maxLength={50}
          value={password}
          onChange={this.onChange}
          quality={this.passwordQuality(password)}
          error={errors.password}
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

RegistrationForm.propTypes = {
  /** Message display upon successful submission */
  confirmationMessage: PropTypes.string,

  /** Called when form is submitted */
  onSubmit: PropTypes.func.isRequired,

  /** Minimun password length */
  minPasswordLength: PropTypes.number
};

RegistrationForm.defaultProps = {
  confirmationMessage: 'Thanks for registering!',
  minPasswordLength: 8
};

export default RegistrationForm;
