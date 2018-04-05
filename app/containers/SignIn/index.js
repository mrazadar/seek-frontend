
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';

import Toastr from 'utils/Helpers/toastr';


import H1 from 'components/H1';
import Form from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';


import { signInUser } from './actions';
import { makeSelectUserSignInSuccess, makeSelectUserSignInError } from './selectors';
import saga from './saga';

import Wrapper from './CenteredWrapper';

const MainHeading = H1.extend`
  font-size: 35px;
  letter-spacing:3px;
`;


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'ford@seek.com',
      password: '123',
      formSubmitted: false,
      showLadda: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    const { userSignInSuccess: success, error } = nextProps;
    if (this.props.userSignInSuccess !== success) {
      this.setState({
        showLadda: false,
      });

      if (success) {
        this.props.history.push('/checkout');
      }
    }
    if (nextProps.error) {
      Toastr({ title: 'Error', msg: error.message, type: 'error' });
      this.setState({
        showLadda: false,
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
      const data = {
        email: this.state.email,
        password: this.state.password,
      };
      this.setState({
        showLadda: true,
      });
      this.props.onSignIn(data);
    }
  }
  renderForm() {
    return (
      <Wrapper>
        <MainHeading>
          Sign In.
        </MainHeading>
        <Form onSubmit={this.handleSubmit} noValidate="true">

          {this.FormInput('email', 'email')}
          {this.FormInput('password', 'password')}

          <Button loading={this.state.showLadda} btnType="black" type="submit">
            Sign In
          </Button>
        </Form>
        <p>Admin credentials</p>
        <p>email: admin@seek.com </p>
        <p>Pass: 123</p>
      </Wrapper>
    );
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Seek - SignIn</title>
          <meta name="description" content="Sign-In page." />
        </Helmet>
        {this.renderForm()}
      </div>
    );
  }
}

SignIn.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  userSignInSuccess: PropTypes.bool,
  onSignIn: PropTypes.func,
  history: PropTypes.object,
};


export function mapDispatchToProps(dispatch) {
  return {
    onSignIn: (data) => {
      dispatch(signInUser(data));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  userSignInSuccess: makeSelectUserSignInSuccess(),
  error: makeSelectUserSignInError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'account', saga });

export default compose(
  withSaga,
  withConnect,
)(SignIn);
