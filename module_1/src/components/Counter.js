import React from 'react';
import PropTypes from 'prop-types';

function Counter({ initialValue, step }) {
  return (
    <div>
      {initialValue + step}
      Counter
    </div>
  );
}

Counter.defaultProps = {
  initialValue: 1,
  step: 1,
};

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Counter;
