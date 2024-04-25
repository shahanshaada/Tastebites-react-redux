export const REGEXEMAIL = /^[^\s@]+@[^\s@]+\.(com)$/;
export const REGEXPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
export const REGEXDIGIT=/^\d+$/;
// actionTypes.js
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';