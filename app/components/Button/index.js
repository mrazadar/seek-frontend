import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { SLIDE_UP } from 'react-ladda';
// import { VARS } from 'styled'

import StyledButton from './StyledButton';
import LinkButton from './LinkButton';

const Button = (props) => {
  const { type } = props.type || 'button';
  let button = (
    <StyledButton
      data-btnType={props.btnType}
      type={type}
      onClick={props.onClick}
      loading={props.loading}
      data-style={SLIDE_UP}
      data-spinner-color="#FFF"
    >
      {Children.toArray(props.children)}
    </StyledButton>
  );
  if (props.to) {
    button = (
      <LinkButton data-btnType={props.btnType} type={type} to={props.to} onClick={props.onClick}>
        {Children.toArray(props.children)}
      </LinkButton>
    );
  }

  return button;
};

Button.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  btnType: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

export default Button;
