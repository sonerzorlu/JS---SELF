// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC EXPRESSION **");

//* ORNEK1:
//*****************************************/

// ! *** Function Expression *** //

const printHello = function () {
  console.log("Hello");
};
printHello(); //! invoke

//* ORNEK2:
//*****************************************/

let oddOrEven = function (num) {
  return num % 2 === 0 ? "EVEN" : "ODD";
};
console.log(oddOrEven(8));

//* ORNEK3:
//*****************************************/

//! find biggest with function

// const findBiggest = function (a,b,c){
// let biggest = a
// if (b>=biggest){
//     biggest = b
// }
// if(c>=biggest){
//     biggest= c
// }

// return biggest
// }
// console.log(`The Biggest : ${findBiggest(3,6,9)}`);

// const findBiggest = function (a,b,c=0){
//     let biggest = a
//     if (b>=biggest){
//         biggest = b
//     }
//     if(c>=biggest){
//         biggest= c
//     }

//     return biggest
//     }
//     console.log(`The Biggest : ${findBiggest(-3,-6)}`);
// const findBiggest = function (a,b,c=Number.MAX_VALUE){
//     let biggest = a
//     if (b>=biggest){
//         biggest = b
//     }
//     if(c>=biggest){
//         biggest= c
//     }

//     return biggest
//     }
// //     console.log(`The Biggest : ${findBiggest(-3,-6)}`);
// const findBiggest = function (a,b,c= -Number.MAX_VALUE){
//     let biggest = a
//     if (b>=biggest){
//         biggest = b
//     }
//     if(c>=biggest){
//         biggest= c
//     }

//     return biggest
//     }
//     console.log(`The Biggest : ${findBiggest(-3,-6)}`);

//* ORNEK4:
//*****************************************/

const add = function (n1, n2) {
  return n1 + n2;
};

const sub = function (n1, n2) {
  return n1 - n2;
};

const div = function (n1, n2) {
  return n1 / n2;
};

const mul = function (n1, n2) {
  return n1 * n2;
};

const compute = function (n1, n2, op) {
  let result = 0;
  switch (op) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = sub(n1, n2);
      break;
    case "*":
      result = mul(n1, n2);
      break;
    case "/":
      result = div(n1, n2);

      break;

    default:
      break;
  }
  return result;
};
console.log(compute(4, 3, "/"));
console.log(compute(2, 4, "*"));
console.log(compute(3, 1, "+"));
console.log(compute(4, 3, "-"));
