export const validateDate = date => {
  const dateValidatorRegex = /^\d{2}\D\d{2}\D\d{4}$/;
  if (date.length !== 10) {
    return false;
  } else if (dateValidatorRegex.test(date)) {
    return true;
  } else {
    return false;
  }
};
