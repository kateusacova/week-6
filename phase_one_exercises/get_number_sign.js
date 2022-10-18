const getNumberSign = (num) => {
  if (num === 0) {
    return 'zero';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'positive';
  }
}

module.exports = getNumberSign