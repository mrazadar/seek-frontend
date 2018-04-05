/**
 *
 * Admin
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

import find from 'lodash/find';
import Toastr from 'utils/Helpers/toastr';


import H1 from 'components/H1';
import Form from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';
import LoadingIndicator from 'components/LoadingIndicator';
import Toggle from 'components/Toggle';

import { fetchCustomers, fetchAdTypes, addRule } from 'utils/request';
import makeSelectAdmin from './selectors';
import reducer from './reducer';
import saga from './saga';

import AdminWrapper from './AdminWrapper';

// for easy access add 'saga+selectors' later

export class Admin extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      offer: '',
      minimum: '',
      discount: '',
      customer: '',
      adType: '',
      loading: true,
      showLadda: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdTypesChange = this.handleAdTypesChange.bind(this);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
  }


  componentDidMount() {
    const customers = fetchCustomers();
    const adTypes = fetchAdTypes();

    Promise.all([customers, adTypes]).then((results) => {
      this.setState({
        customers: results[0],
        adTypes: Object.keys(results[1]),
        loading: false,
      });
    });
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

  handleCustomerChange(evt) {
    const { value } = evt.target;
    if (value) {
      this.setState({
        customer: evt.target.value,
      });
    }
  }

  handleAdTypesChange(evt) {
    const { value } = evt.target;
    if (value) {
      this.setState({
        adType: evt.target.value,
      });
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      formSubmitted: true,
    });
    if (evt.target.checkValidity()) {
      const data = {
        offer: parseInt(this.state.offer, 10),
        minimum: parseInt(this.state.minimum, 10),
        discount: parseInt(this.state.discount, 10),
        ad_type: this.state.adType,
        customer_id: find(this.state.customers, (c) => this.state.customer === c.username).id,
      };


      const promise = addRule(data);
      promise.then((res) => {
        if (res.success) {
          Toastr({ title: 'Rule Added', msg: res.message, type: 'success' });
        }
        this.setState({
          showLadda: false,
        });
      });
    }
  }


  renderRules() {
    return (

      <div className="rules">
        <H1>Add Rule</H1>
        <Form onSubmit={this.handleSubmit} noValidate="true">

          {this.FormInput('number', 'offer')}
          {this.FormInput('number', 'minimum')}
          {this.FormInput('number', 'discount')}


          <Toggle value={this.state.adType} values={this.state.adTypes} onToggle={this.handleAdTypesChange} placeholder="Select Ad Type" />
          <Toggle value={this.state.customer} values={this.state.customers.map((c) => c.username)} onToggle={this.handleCustomerChange} placeholder="Select Customer" />

          <Button loading={this.state.showLadda} btnType="black" type="submit">
            Add
          </Button>
        </Form>

      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Helmet>
          <title>Admin</title>
          <meta name="description" content="Description of Admin" />
        </Helmet>

        <AdminWrapper>

          { loading ? <LoadingIndicator /> : this.renderRules() }
        </AdminWrapper>
      </div>
    );
  }
}

Admin.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  admin: makeSelectAdmin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'admin', reducer });
const withSaga = injectSaga({ key: 'admin', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Admin);
