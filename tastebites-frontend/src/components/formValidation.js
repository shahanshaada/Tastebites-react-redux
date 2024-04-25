import * as constants from '../constants';
const validateEmail = (email) => {
    const emailRegex = constants.REGEXEMAIL;
    return emailRegex.test(email);
  };
  
  const handleEmptyValue = (value) => {
    return value.trim() !== '';
  };
  const validatePasswordLength = (password) => {
    return password.length >= 8; // Password must be at least 8 characters long
  };
  
  const validatePasswordStrength = (password) => {
    // Password must contain at least one uppercase letter, one lowercase letter, and one digit
    const regex = constants.REGEXPASSWORD;
    return regex.test(password);
  };
  const validatePasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };
  const validatePhoneNumberLength = (phoneNumber) => {
    const hasDesiredLength = phoneNumber.length === 10;
  
    return hasDesiredLength;
  };
  const validatePhoneNumberDigit = (phoneNumber) => {
    const isNumeric = constants.REGEXDIGIT.test(phoneNumber);
    return isNumeric;
  };
  
  export { validateEmail, handleEmptyValue ,validatePasswordLength, validatePasswordStrength,validatePasswordMatch,validatePhoneNumberLength,validatePhoneNumberDigit};