function invert(array) {
  let newArr = [];
  for (x = 0; x < array.length; x++) {
    if (array[x] >= 0) {
      newArr.push(-Math.abs(array[x]));
    } else if (array[x] < 0) {
      newArr.push(Math.abs(array[x]));
    } else {
      return array[x];
    }
  }
  return newArr;
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));
