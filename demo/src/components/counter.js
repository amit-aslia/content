import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({ id, name, label, isChecked}) => {
  const handleChange = (event) => console.log(event);
  return (
    <div>
      <input  defaultChecked={isChecked} onChange={handleChange} type='radio' id={id} name={name}  />
      <label htmlFor={id} >{label}</label>
    </div>
  );
}

RadioButton.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  label: PropTypes.string,
  isChecked: PropTypes.bool
}

RadioButton.defaultProps = {
  name: 'firstInput'
}

export default RadioButton;


