/**
*
* ToggleOption
*
*/

import React from 'react';
import PropTypes from 'prop-types';

const ToggleOption = ({ value }) => (
  <option value={value}>
    {value}
  </option>
);

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ToggleOption;
