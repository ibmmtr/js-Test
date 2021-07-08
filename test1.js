var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheep) {
  let totalTrue = 0;
  for (let j = 0; j < arrayOfSheep.length; j++) {
    if (arrayOfSheep[j] == true) {
      totalTrue++;
    }
  }
  return totalTrue;
}
console.log(countSheeps(array1));
//! Clever Solution
function countSheeps1(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
console.log(countSheeps1(array1));
