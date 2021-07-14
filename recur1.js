const recursiveCountdown = (num) => {
  if (num === 0) {
    return;
  }
  console.log(num);
  recursiveCountdown(num - 1);
};

recursiveCountdown(10);

// --------------

const recursiveRangeSum = (num, total = 0) => {
  if (num <= 0) {
    return total;
  }
  return recursiveRangeSum(num - 1, total + num);
};

console.log(recursiveRangeSum(10));

// --------------
const tree = {
  name: "John",
  children: [
    {
      name: "Zoe",
      children: [],
    },
    {
      name: "Bob",
      children: [
        {
          name: "Joe",
          children: [],
        },
        {
          name: "Eloise",
          children: [],
        },
      ],
    },
  ],
};

const PrintAllChildren = (tree) => {
  if (tree.children.length === 0) {
    //see if root (or recursive
    return;
  }
  tree.children.forEach((child) => {
    console.log(child.name);
    PrintAllChildren(child); // execute the function on each child
  });
};

PrintAllChildren(tree);

// --------------
function sumOfDigits(num) {
  if (num == 0) {
    return 0;
  }
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(148));

// --------------
function factorial(x) {
  // TERMINATION
  if (x < 0) return;
  // BASE
  if (x === 0) return 1;
  // RECURSION
  return x * factorial(x - 1);
}
factorial(3);
// 6
// --------------
//! source https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
function revStr(str) {
  if (str === "") return "";
  return revStr(str.substr(1)) + str[0];
}
revStr("cat");
// tac
