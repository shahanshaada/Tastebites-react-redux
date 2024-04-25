import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants';

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const logout = () => ({
  type: LOGOUT
});
