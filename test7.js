function countPositivesSumNegatives(input) {
  let answer = [];
  let posCount = 0;
  let negSum = 0;

  if (input && input.length) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        posCount += 1;
      } else {
        negSum += input[i];
      }
    }
    answer.push(posCount);
    answer.push(negSum);
    // Can  return [posCount,negSum]
  }
  return answer;
}

let testData2 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
let testData3 = [];

console.log(countPositivesSumNegatives(testData2));
console.log(countPositivesSumNegatives(testData3));
