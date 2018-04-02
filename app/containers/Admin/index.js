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

// import Toastr from 'utils/Helpers/toastr';


import H1 from 'components/H1';
import Form from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';

import makeSelectAdmin from './selectors';
import reducer from './reducer';
import saga from './saga';

import AdminWrapper from './AdminWrapper';

export class Admin extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      offer: '',
      minimum: '',
      discount: '',
      // ad_type: 'classic',
      // customer_id: 2,
      customer: null,
      ad_type: null,
    };
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

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      formSubmitted: true,
    });
    if (evt.target.checkValidity()) {
      // const data = {
      //   offer: this.state.offer,
      //   minimum: this.state.minimum,
      //   discount: this.state.discount,
      //   password: this.state.password,
      // };
      // const data = this.state;
      this.setState({
        showLadda: true,
      });
      // this.props.onSignIn(data);
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

          <Button loading={this.state.showLadda} btnType="black" type="submit">
            Add
          </Button>
        </Form>

      </div>
    );
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Admin</title>
          <meta name="description" content="Description of Admin" />
        </Helmet>

        <AdminWrapper>

          {this.renderRules()}
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
