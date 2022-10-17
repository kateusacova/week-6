const printHello = () => {
  console.log('Hello!');
}

const executeAfterDelay = (num, operation) => {
  setTimeout(operation, num * 1000);
}

executeAfterDelay(5, printHello);