const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length === validLength) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidLength('00')); // must be false

console.log(isValidLength('01234567891')); // must be true 