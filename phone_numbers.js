const checkLength = (number) => {
  return number.length <= 10;
}

const filterLongNumbers = (numbers) => {
  console.log(numbers.filter(checkLength));
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

filterLongNumbers(numbers);
filterLongNumbers(['4763687363', '7867867862']);
filterLongNumbers([]);

