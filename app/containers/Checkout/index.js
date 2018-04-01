/**
 *
 * Checkout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import H3 from 'components/H3';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCheckout from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Checkout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Checkout</title>
          <meta name="description" content="Description of Checkout" />
        </Helmet>
        <H3>Checkout</H3>
      </div>
    );
  }
}

Checkout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  checkout: makeSelectCheckout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'checkout', reducer });
const withSaga = injectSaga({ key: 'checkout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Checkout);
