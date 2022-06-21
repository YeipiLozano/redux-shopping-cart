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
import {useSelector} from 'react-redux';
import {getTotalPrice, createMemoizedGetNumItems} from '../../state/cartSlice';

const Cart = () => {
  const quantities = useSelector(createMemoizedGetNumItems);
  const totalPrice = useSelector(getTotalPrice);
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
            <p>Items {quantities ? quantities : 0}</p>
          </div>
          <hr />
          <div>
            <p>Total Cost</p>
            <p>${totalPrice ? totalPrice : 0}</p>
          </div>
          <Button>Checkout</Button>
        </CheckoutCard>
      </CheckoutContainer>
    </CartContainer>
  );
};

export default Cart;
