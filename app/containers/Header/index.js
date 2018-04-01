import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Navbar from 'components/Navbar';
import Title from 'components/Navbar/Title';

import { makeSelectUser } from 'containers/SignIn/selectors';
import { logoutUser } from 'containers/SignIn/actions';

import { makeSelectLocation } from 'containers/App/selectors';

import RightArea from './RightArea';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Navbar>
        <Title to="/">
          Seek Checkout System
        </Title>
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
