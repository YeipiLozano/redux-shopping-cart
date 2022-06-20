import {createSlice, createSelector} from '@reduxjs/toolkit';

// With this syntax we tell Typescript that the keys are string and
// the values are numbers.
// translates to
// items: {
//   '123': 4,
//   'abc': 22,
// }

const initialState = {
  items: [],
};

// A function that accepts an initial state, an object full of reducer functions, and a "slice name",
// and automatically generates action creators and action types that correspond to the reducers and state.
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const id = product.id;
      // If the item is already in the cart, we just increment the quantity.
      if (state.items.find((item) => item.product.id === id)) {
        state.items.find((item) => item.product.id === id).quantity += 1;
      } else {
        // Otherwise, we add the item to the cart.
        state.items.push({product, quantity: 1});
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateQuantity(state, action) {
      const {id, quantity} = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.quantity = quantity;
    },
  },
});

export const {addToCart, removeFromCart, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;

// vvvvv THIS IS A SELECTOR. Created to 'select' info from the state
export function getNumItems(state) {
  let numItems = 0;
  for (let id in state.cart.items) {
    numItems += state.cart.items[id];
  }
  return numItems;
}

// Instead of running on the whole state, it runs only on the items, so it is only called only when these change.
// CreateSelector remembers the value of its final selector as long as the first parameter hasn't changed
export const createMemoizedGetNumItems = createSelector(
  (state) => state.cart.items,
  (items) => {
    let numItems = 0;
    for (let id in items) {
      numItems += items[id];
    }
    return numItems;
  }
);

export const getTotalPrice = createSelector(
  (state) => state.cart.items,
  (state) => state.products.products,
  (items, products) => {
    let total = 0;
    for (let id in items) {
      total += products[id].price + items[id];
    }
    return total.toFixed(2);
  }
);
