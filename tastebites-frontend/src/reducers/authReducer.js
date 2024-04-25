import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      console.log(action.payload)
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      console.log(state)
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
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

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
