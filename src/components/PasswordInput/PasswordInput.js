import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import EyeIcon from '../EyeIcon';
import TextInput from '../TextInput';

/** Password input with integrated label, quality tips, and show password toggle. */
class PasswordInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false
    };
  }

  toggleShowPassword = e => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
    if (e) e.preventDefault();
  };

  render() {
    const {
      htmlId,
      value,
      label,
      error,
      onChange,
      placeholder,
      maxLength,
      showVisibilityToggle,
      quality,
      ...rest
    } = this.props;
    const { showPassword } = this.state;

    return (
      <TextInput
        htmlId={htmlId}
        label={label}
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        error={error}
        required
        {...rest}
      >
        {showVisibilityToggle && (
          <button
            onClick={this.toggleShowPassword}
            style={{
              marginLeft: 5,
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer'
            }}
          >
            <EyeIcon />
          </button>
        )}
        {value.length > 0 && quality && (
          <ProgressBar percent={quality} width={130} />
        )}
      </TextInput>
    );
  }
}

PasswordInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Max password length accepted */
  maxLength: PropTypes.number,

  /** Set to true to show the toggle for displaying the currently entered password */
  showVisibilityToggle: PropTypes.bool,

  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */
  quality: PropTypes.number
};

PasswordInput.defaultProps = {
  label: 'Password',
  maxLength: 50,
  showVisibilityToggle: false
};

export default PasswordInput;
