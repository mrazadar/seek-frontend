import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import A from 'components/A';

const UserWrapper = styled.div`
  a{    
    display: inline-block;
    vertical-align: top;
    padding: 0;
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
        <p>{user.username}</p>
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
