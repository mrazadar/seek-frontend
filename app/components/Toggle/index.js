/**
*
* LocaleToggle
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Select from './Select';
import ToggleOption from '../ToggleOption';

function Toggle(props) {
  let content = (<option>--</option>);

  // If we have items, render them
  if (props.values) {
    content = props.values.map((value) => (
      <ToggleOption key={value} value={value} />
    ));
  }

  return (
    <Select value={props.value} onChange={props.onToggle}>
      <option defaultValue>{props.placeholder}</option>
      {content}
    </Select>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  values: PropTypes.array,
  value: PropTypes.string,
};

export default Toggle;
