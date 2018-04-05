import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
// import { getRules } from 'utils/request';

const CartList = styled.div`
display: table-cell;
  width:40%;
`;

const RenderCart = ({ cart, onPurchase }) =>
  // const calculateDiscount = () => {
    // TODO
    // Calculate discoutn on cartlist based on Customer Rules added in database
  // };
   (
     <CartList>
       {
        cart.map((c, indx) => (
          /* eslint-disable react/no-array-index-key */
          <div key={indx}>
            <p>
                TODO:
                Calculate discoutn on cartlist based on Customer Rules added in database
            </p>
            <h3>{c.title}</h3>
            <p>{c.adType}</p>
            <p>{c.adType}</p>
            <Button btnType="gray" onClick={onPurchase}>
              Purchase All
            </Button>
          </div>
        ))
      }
     </CartList>
  );


RenderCart.propTypes = {
  cart: PropTypes.array,
  onPurchase: PropTypes.func,
};

export default RenderCart;
