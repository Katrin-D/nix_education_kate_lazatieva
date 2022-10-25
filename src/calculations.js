const { square, cube } = require("./index.js");

const squarePlusCube = (num) => {
  return square(num) + cube(num);
};

//to check do "npm run startCalc"
console.log(squarePlusCube(3));
