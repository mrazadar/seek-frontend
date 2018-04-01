/**
 *
 * Ads
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
import makeSelectAds from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Ads extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Ads</title>
          <meta name="description" content="Description of Ads" />
        </Helmet>
        <H3>Ads Page</H3>
      </div>
    );
  }
}

Ads.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ads: makeSelectAds(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'ads', reducer });
const withSaga = injectSaga({ key: 'ads', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Ads);
