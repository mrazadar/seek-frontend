/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import { VARS } from 'styled-variables';
import H1 from 'components/H1';
import P from 'components/P';
import CenterdWrapper from 'containers/SignIn/CenteredWrapper';

const NotFoundWrapper = CenterdWrapper.extend`
  top:35%;
  width:100%;
  margin-top: 70px;
  h1{
    color: ${VARS.$dark};
  }
  p{
    color: ${VARS.$black};
  }
`;

const BigH1 = H1.extend`
  font-weight: 800;
  font-size: 20em;
`;

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NotFoundWrapper>
        <BigH1>
          404
        </BigH1>
        <H1>This page does not exist.</H1>
        <P>The link you clicked may be broken or the page may have been removed.</P>
      </NotFoundWrapper>
    );
  }
}
