import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VARS } from 'styled-variables';

import A from 'components/A';

const UserWrapper = styled.div`
  width: 120px;
  a{    
    display: inline-block;
    vertical-align: top;
    padding: 0;
    color: ${VARS.$white};
  }
  div{
    margin-right: 0;
  }
`;

const User = ({ user, logoutHandler }) => {
  if (user) {
    return (
      <UserWrapper>
        <A onClick={logoutHandler}>Logout</A>
        <A > {user.username}</A>
      </UserWrapper>
    );
  }
  return null;
};

User.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  logoutHandler: PropTypes.func,
};


export default User;
