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

import List from 'components/List';
import Item from 'components/ListItem';
import Form from 'components/Form';
import Input from 'components/Input';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

import { fetchAds } from './actions';
import { makeSelectAds } from './selectors';
// import { makeSelectAds, makeSelectFetchAdsSuccess, makeSelectFetchAdsError } from './selectors';


import AdsWrapper from './AdsWrapper';

const SearchForm = Form.extend`
  padding:30px;
`;

export class Ads extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      filteredAds: this.props.ads,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAds();
  }

  hasError(field) {
    if (this.state.formSubmitted) {
      const elem = this[field];
      const isValid = elem && elem.validity.valid;
      return !isValid ? 'error' : '';
    }
    return false;
  }

  handleChange(evt) {
    const { target } = evt;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      formSubmitted: true,
    });
    if (evt.target.checkValidity()) {
      this.setState({
        // filteredAds: filter()
      });
    }
  }

  renderSearchForm() {
    return (
      <SearchForm onSubmit={this.handleSubmit} noValidate="true">

        <Input
          type="text"
          value={this.state.search}
          className={this.hasError('search') ? 'error' : ''}
          placeholder="Search Ads"
          innerRef={(c) => { this.search = c; }}
          name="search"
          onChange={this.handleChange}
          required="true"
        />
      </SearchForm>

    );
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Ads</title>
          <meta name="description" content="Description of Ads" />
        </Helmet>
        {/* <H3>Ads</H3> */}
        <AdsWrapper>
          {this.renderSearchForm()}
          { this.state.filteredAds.length ? <List list={this.state.filteredAds} ItemComponent={Item} key="id" /> : null}
        </AdsWrapper>
      </div>
    );
  }
}

Ads.propTypes = {
  ads: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  fetchAds: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ads: makeSelectAds(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchAds: () => (dispatch(fetchAds())),
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
