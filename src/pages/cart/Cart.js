import React from 'react';
import CartTable from '../../components/table/';
import { CartContainer, CheckoutCard, CheckoutContainer, ItemsContainer, CheckoutTitle } from './Cart.styles';

const Cart = () => {
  return (
    <CartContainer>
      <ItemsContainer>
        <h3>Shopping Cart</h3>
        <hr />
        <CartTable />
      </ItemsContainer>
      <CheckoutContainer>
        <CheckoutCard>
          <CheckoutTitle>Summary</CheckoutTitle>
          <hr />
          <div>
            <p>Items 3</p>
            <p>Items $500.00USD</p>
          </div>
          <hr />
          <div>
            <p>Total Cost</p>
            <p>Items $550.00USD</p>
          </div>
          <button>Checkout</button>
        </CheckoutCard>
      </CheckoutContainer>
    </CartContainer>
  );
};

export default Cart;
