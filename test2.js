function positiveSum(arr) {
  let posNum = 0;
  for (let z = 0; z < arr.length; z++) {
    if (arr[z] > 0) {
      posNum += arr[z];
    } else if (arr[z] === "") {
      return "0";
    }
  }
  return posNum;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
