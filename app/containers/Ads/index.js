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
      filteredAds: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    this.props.fetchAds();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ads !== null) {
      this.setState({
        filteredAds: nextProps.ads.sort((a, b) => b.ad_type === 'premium'),
      });
    }
  }

  handleChange(evt) {
    const { target } = evt;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { ads } = this.props;
    this.setState({
      [target.name]: value,
      filteredAds: (value !== '') ? (ads.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase()))) : ads,
    });
  }


  renderSearchForm() {
    return (
      <SearchForm noValidate="true">

        <Input
          type="text"
          value={this.state.search}
          placeholder="Search by title"
          innerRef={(c) => { this.search = c; }}
          name="search"
          onChange={this.handleChange}
          required="true"
        />
      </SearchForm>

    );
  }

  render() {
    const { filteredAds } = this.state;
    return (
      <div>
        <Helmet>
          <title>Ads</title>
          <meta name="description" content="Description of Ads" />
        </Helmet>
        {/* <H3>Ads</H3> */}
        <AdsWrapper>
          {this.renderSearchForm()}
          {filteredAds.length ? <List list={filteredAds} ItemComponent={Item} key="id" /> : null}
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
