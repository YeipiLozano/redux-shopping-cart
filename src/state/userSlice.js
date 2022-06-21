import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
    id: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // The payload we'll be receiving is an object array containing Products
    receivedProducts(state, action) {
      const products = action.payload;
      // We then loop through each product and add it to the state. Having the product.id as the key.
      for (let product = 0; product < products.length; product++) {
        const element = products[product];
        state.products[product] = element;
      }
    },
  },
});

export const {receivedProducts} = userSlice.actions;
export default userSlice.reducer;
