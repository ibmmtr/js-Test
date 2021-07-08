/*let chars = ["A", "B", "A", "C", "B"];
let chars2 = [1, 1, 11, 2, 3, 3, 1];

let uniqueChars = chars2.filter((c, index) => {
  return chars2.indexOf(c) === index;
});

console.log(uniqueChars);


let dupChars = chars.filter((c, index) => {
  return chars.indexOf(c) !== index;
});

console.log(dupChars);

var arr = [1, 2, 3];
var max = Math.max(...arr);
*/

function sumArray(array) {
  if (array && array.length > 1) {
    console.log("Raw: " + array);
    const sortedArray = array.sort((a, b) => a - b).slice(1, -1); //Sort and Remove First Last
    console.log("Sorted: " + sortedArray);
    //! Remove Duplicated
    /*let uniqueChars = sortedArray.filter((c, index) => {
      return sortedArray.indexOf(c) === index;
    });
    console.log(uniqueChars);/*/
    return sortedArray.reduce((acc, cur) => acc + cur, 0); // Sum Number
  }
  return 0;
}

let chars2 = [1, 1, 1, 12, 12, 12, 2, 3, 3, 3, 5];

console.log(sumArray(chars2));
