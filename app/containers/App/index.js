/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ReduxToastr from 'react-redux-toastr';
import Header from 'containers/Header';

// import { userIsAuthenticated, userIsNotAuthenticated } from 'utils/Helpers/reduxAuth';
import AdsPage from 'containers/Ads/Loadable';

// import AdvertisementsPage from 'containers/Advertisements/Loadable';
import SignInPage from 'containers/SignIn/Loadable';

import AdminPage from 'containers/Admin/Loadable';
import CheckoutPage from 'containers/Checkout/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';


// const Advertisements = userIsNotAuthenticated(AdvertisementsPage);
// const SignIn = userIsNotAuthenticated(SignInPage);

// const Admin = userIsAuthenticated(AdminPage);
// const Checkout = userIsAuthenticated(CheckoutPage);


export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={AdsPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/admin" component={AdminPage} />
        {/* <Route exact path="/signin" component={SignIn} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/checkout" component={Checkout} /> */}
        <Route component={NotFoundPage} />
      </Switch>
      <ReduxToastr
        timeOut={3000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        progressBar
      />
    </div>
  );
}
