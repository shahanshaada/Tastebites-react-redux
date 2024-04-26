import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload.user;
    },
    addRating(state,action){
      state.loading = false;
      state.user = action.payload.user;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { loginSuccess, addRating, logout } = authSlice.actions;
export default authSlice.reducer;
