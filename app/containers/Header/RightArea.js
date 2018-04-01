import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import RightAreaStyles from 'components/Navbar/RightAreaStyles';

import User from './User';

const RightArea = ({ location, user, logoutHandler }) => {
  if (!user && location.pathname !== '/signin') {
    return (
      <RightAreaStyles>
        <Button to="/signin" btnType="black">
          Sign In
        </Button>
      </RightAreaStyles>
    );
  }
  return (<RightAreaStyles> <User user={user} logoutHandler={logoutHandler} /> </RightAreaStyles>);
};

RightArea.propTypes = {
  location: PropTypes.object,
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  logoutHandler: PropTypes.func,
};


export default RightArea;
