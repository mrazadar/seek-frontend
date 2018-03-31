/**
 *
 * SignIn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectSignIn from './selectors';
import reducer from './reducer';

export class SignIn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>SignIn</title>
          <meta name="description" content="Description of SignIn" />
        </Helmet>
      </div>
    );
  }
}

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signin: makeSelectSignIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signIn', reducer });

export default compose(
  withReducer,
  withConnect,
)(SignIn);
