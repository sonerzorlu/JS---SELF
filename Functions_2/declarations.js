// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **");

//* ORNEK1:
//*****************************************/

// //! Declaration
// function printHello() {
//   console.log("Hello");
// }

// printHello(); //! invoke, call
// printHello(); //! invoke, call

// //* ORNEK2:
// //*****************************************/

// function greet(firstName, lastName = "") {
//   console.log(`Hi, ${firstName} ${lastName}`);
// }
// greet("soner", "zorlu");
// const name=prompt("enter your name")
// const lastName=prompt("enter your lastname")
// greet(name, lastName);

//* ORNEK3:
//*****************************************/

// function calculate(name,yob) {
//   const age=2023- yob
//   console.log(`${name} is ${age} years old`);
// }
calculate("soner",1985)
function calculate(name,yob) {
  const age= new Date().getFullYear()- yob
  console.log(`${name}'s age   is ${age} years old`);
}
calculate("soner",1985);


function calc(name,yob) {
  const age= new Date().getFullYear()- yob
  return`${name}'s age   is ${age} years old`
}


const elif = calc("elif",2000)
console.log(elif);
console.log(calc("rose",2000));


//* ORNEK4:
//*****************************************/

function oddOrEven(num){
  return num % 2 ? "odd" : "even" // ? sifir falsy degerdir o yuzden kalan varsa "true" kalan "sifirsa" falsy olur.
}

const number = +prompt("enter a number")

const oddEven = oddOrEven(number);
console.log(oddEven);