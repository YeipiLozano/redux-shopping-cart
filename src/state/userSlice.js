import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
    id: '',
    isLoggedIn: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // The payload we'll be receiving is an object array containing Products
    setUser(state, action) {
      const {username} = action.payload;
      state.user = {username, id: 1, isLoggedIn: true};
    },
  },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
