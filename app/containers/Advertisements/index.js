/**
 *
 * Advertisements
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectAdvertisements from './selectors';
import reducer from './reducer';

export class Advertisements extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Advertisements</title>
          <meta name="description" content="Description of Advertisements" />
        </Helmet>
      </div>
    );
  }
}

Advertisements.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  advertisements: makeSelectAdvertisements(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'advertisements', reducer });

export default compose(
  withReducer,
  withConnect,
)(Advertisements);
