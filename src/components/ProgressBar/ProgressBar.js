import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
  getColor = () => {
    if (this.props.percent === 100) return 'green';
    return this.props.percent > 50 ? 'lightgreen' : 'red';
  };

  getWidthAsPercentOfTotalWidth = () =>
    parseInt(this.props.width * (this.props.percent / 100), 10);

  render() {
    const { width, height } = this.props;
    return (
      <div style={{ border: 'solid 1px lightgray', width }}>
        <div
          style={{
            width: this.getWidthAsPercentOfTotalWidth(),
            height,
            backgroundColor: this.getColor()
          }}
        />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,

  /** Bar width */
  width: PropTypes.number.isRequired,

  /** Bar height */
  height: PropTypes.number
};

ProgressBar.defaultProps = {
  height: 5
};

export default ProgressBar;
