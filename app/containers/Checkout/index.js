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


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

// import find from 'lodash/find';
// import Toastr from 'utils/Helpers/toastr';


import H1 from 'components/H1';
import Form from 'components/Form';
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Button from 'components/Button';
import LoadingIndicator from 'components/LoadingIndicator';
import Toggle from 'components/Toggle';

import { fetchAdTypes } from 'utils/request';
import makeSelectCheckout from './selectors';
import reducer from './reducer';
import saga from './saga';

import RenderCart from './RenderCart';
import CheckoutWrapper from './CheckoutWrapper';

// for easy access add 'saga+selectors' later

export class Checkout extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      adTypes: null,
      adType: '',
      title: '',
      text: '',
      longText: '',
      logo: '',
      loading: false,
      cart: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdTypesChange = this.handleAdTypesChange.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }


  componentDidMount() {
    const adTypes = fetchAdTypes();

    Promise.all([adTypes]).then((results) => {
      this.setState({
        adTypes: Object.keys(results[0]),
        loading: false,
      });
    });
  }
  getConditionalFields(adType) {
    switch (adType) {
      case 'classic':
        return this.FormInput('text', 'text');
      case 'standout':
      case 'premium':
        return (
          <div>
            { this.FormTextarea('text') }
            { this.FormInput('logo', 'logo') }
          </div>
        );

      default:
        return null;
    }
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


  handleAdTypesChange(evt) {
    const { value } = evt.target;
    if (value) {
      this.setState({
        adType: evt.target.value,
      });
    }
  }


  FormInput(type, field) {
    return (
      <Input
        type={type}
        value={this.state[field]}
        className={this.hasError(field) ? 'error' : ''}
        placeholder={field}
        innerRef={(c) => { this[field] = c; }}
        name={field}
        onChange={this.handleChange}
        required="true"
      />
    );
  }


  FormTextarea(type, field) {
    return (
      <Textarea
        value={this.state[field]}
        className={this.hasError(field) ? 'error' : ''}
        placeholder="Type longer text here."
        innerRef={(c) => { this[field] = c; }}
        name={field}
        onChange={this.handleChange}
        required="true"
      ></Textarea>
    );
  }


  handlePurchase() {
    // purchase all items
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      formSubmitted: true,
    });
    if (evt.target.checkValidity()) {
      const data = {
        ad_type: this.state.adType,
        title: this.state.title,
        text: this.state.text,
        longText: this.state.longText,
        logo: this.state.logo,
      };

      const { cart } = this.state;
      this.setState({
        cart: [data, ...cart],
      });


      // const promise = addRule(data);
      // promise.then((res) => {
      //   if (res.success) {
      //     Toastr({ title: 'Rule Added', msg: res.message, type: 'success' });
      //   }
      //   this.setState({
      //     showLadda: false,
      //   });
      // });
    }
  }


  renderPostAd() {
    return (

      <div className="rules">
        <H1>Post Ad</H1>
        <Form onSubmit={this.handleSubmit} noValidate="true">


          {this.FormInput('title', 'title')}

          <Toggle value={this.state.adType} values={this.state.adTypes} onToggle={this.handleAdTypesChange} placeholder="Select Ad Type" />

          { this.getConditionalFields(this.state.adType)}

          <Button loading={this.state.showLadda} btnType="black" type="submit">
            Add To Cart
          </Button>
        </Form>

      </div>
    );
  }

  render() {
    const { loading, cart } = this.state;
    const wrapperStyle = {
      display: 'table',
      verticalAlign: 'top',
    };
    return (
      <div style={wrapperStyle}>
        <Helmet>
          <title>Checkout</title>
          <meta name="description" content="Description of Checkout" />
        </Helmet>

        <CheckoutWrapper>
          { loading ? <LoadingIndicator /> : this.renderPostAd() }
        </CheckoutWrapper>
        { cart.length ? <RenderCart cart={this.state.cart} onPurchase={this.handlePurchase} /> : null}
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
