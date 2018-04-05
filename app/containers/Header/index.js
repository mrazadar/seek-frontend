import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Navbar from 'components/Navbar';
import { linkStyles } from 'components/A';
import Title from 'components/Navbar/Title';

import { makeSelectUser } from 'containers/SignIn/selectors';
import { logoutUser } from 'containers/SignIn/actions';

import { makeSelectLocation } from 'containers/App/selectors';

import RightArea from './RightArea';

const LinkWrapper = styled.div`
  display: inline-block;
`;

const NavLink = styled(Link)`
  ${linkStyles}
  padding-left:70px;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Navbar>
        <Title to="/">
          Seek Checkout System
        </Title>
        {
          this.props.user ?
          (
            <LinkWrapper>
              {this.props.user.email === 'admin@seek.com' ? <NavLink to="/admin" color="white">Admin</NavLink> : null}
              <NavLink to="/checkout" color="white">Checkout</NavLink>
            </LinkWrapper>
          )
          : null
        }

        <RightArea
          location={this.props.location}
          user={this.props.user}
          logoutHandler={this.props.logoutHandler}
        />
      </Navbar>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object,
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  logoutHandler: PropTypes.func,
};


export function mapDispatchToProps(dispatch) {
  return {
    logoutHandler: () => dispatch(logoutUser()),
  };
}

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  user: makeSelectUser(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  // withRouter,
  withConnect,
)(Header);
