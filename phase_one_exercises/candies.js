const addToBatch = (arr, num) => {
  if (arr.length <= 4) {
    console.log(arr.concat(num));
  } else {
    console.log(arr);
  }
}

addToBatch([1], 3); 

addToBatch([1, 2, 3], 4); 

addToBatch([], 8); 

addToBatch([1, 2, 3, 4, 5, 6], 7); 

addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); 