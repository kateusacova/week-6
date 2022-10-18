const lowecaseMessage = (str) => {
  return str.toLowerCase();
}

const transform = (str, command) => {
  return command(str);
}

console.log(transform('WHY ARE YOU SHOUTING?', lowecaseMessage));