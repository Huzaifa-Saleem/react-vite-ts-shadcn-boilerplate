export const validatePassword = (password: string): boolean | string => {
  const hasAlphabet = /[a-zA-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);
  const hasDigit = /\d/.test(password);

  if (password.length < 6 || !(hasAlphabet && hasSpecialChar && hasDigit)) {
    return false;
  }

  return true;
};
