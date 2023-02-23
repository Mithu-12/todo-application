import React from 'react';
import Inputs from './inputs';
import PropTypes from 'prop-types';

export default function InputState({ inputValue, handleChange }) {
  return (
    <div>
      <h4>Inputs</h4>
      <Inputs
        name="inputboxA"
        value={inputValue.inputboxA}
        onChange={handleChange}
      />
      <Inputs
        name="inputboxB"
        value={inputValue.inputboxB}
        onChange={handleChange}
      />
      <br />
    </div>
  );
}

InputState.propTypes = {
  inputValue: PropTypes.shape({
    inputboxA: PropTypes.number.isRequired,
    inputboxB: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
