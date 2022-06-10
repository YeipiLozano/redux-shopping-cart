import React from 'react';
import ItemRow from '../itemrow/';

const CartTable = () => {
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
        <ItemRow />
      </tbody>
    </table>
  );
};

export default CartTable;
