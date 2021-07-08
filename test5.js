function digitize(n) {
  let fromNumberToArray = [...n.toString()].map(Number).reverse();
  return fromNumberToArray;
}
num = 35231;
console.log(fromNumberToArray);
