import React from 'react';
import ItemRow from '../itemrow/';
import {useSelector} from 'react-redux';

const CartTable = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <table>
      <thead>
        <tr>
          <th>Product details</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((data) => {
          return (
            <ItemRow
              key={data.product.id}
              quantity={data.quantity}
              product={data.product}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;
