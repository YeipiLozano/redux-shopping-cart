import React from 'react';
import CartTable from '../../components/table/';
import {
  CartContainer,
  CheckoutCard,
  CheckoutContainer,
  ItemsContainer,
  CheckoutTitle,
} from './Cart.styles';
import {Button} from '../../styles/shared/Button';
import {useDispatch, useSelector} from 'react-redux';
import {getTotalPrice} from '../../state/cartSlice';

const Cart = () => {
  // const total = useSelector(getTotalPrice);
  const dispatch = useDispatch();
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
          </div>
          <hr />
          <div>
            <p>Total Cost</p>
            <p>$550.00USD</p>
          </div>
          <Button>Checkout</Button>
        </CheckoutCard>
      </CheckoutContainer>
    </CartContainer>
  );
};

export default Cart;
