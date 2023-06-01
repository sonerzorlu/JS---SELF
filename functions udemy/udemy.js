// fruitProcessor(5, 2); // !decleration works before the code

// // console.log(age1,age2); //! expression doesnt work before the code

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
//   console.log(`${juice}`);
// }
// const juice = fruitProcessor(5, 2);
// console.log(juice);

// console.log(fruitProcessor(3, 4));

// function calcAge1(birthYear) {
//   return new Date().getFullYear() - birthYear;
// }
// console.log(calcAge1(1997));

// const age1 = calcAge1(1992);
// const age2 = calcAge1(1999);

// console.log(age1, age2);

// // ! ARROW FUNCTION ! //\\

// function calcAge1(birthYear) {
//   return new Date().getFullYear() - birthYear;
// }

// const calcAge3 = (birthYear) => new Date().getFullYear() - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// console.log(calcAge3(1881));


// const birth = +prompt('enter your birth date')
// const name = prompt('enter your name')
// const retired = (birth, name) => {
//   const age = 2023 - birth;
//   const retired = 65 - age;

//   if (retired>0){
//     console.log( `${name} is being retired  ${retired} years later`);
//   }else{
//     console.log(  `${name} has already retired  ${retired} years ago`);
//   }
// };
// console.log(retired);

// ! NESTED FUNCTIONS

// const cutFruitToPieces = (pieces) => {
//   return 4 * pieces;
// };

// const juiceMaker = (apples, oranges)=> {
//   const apple = cutFruitToPieces(apples);
//   const orange = cutFruitToPieces(oranges);

//   const juice = `this juice prepared with ${apple} pieces of apple and ${orange} pieces of orange`;
//   return juice;
// }
// console.log(juiceMaker(4, 6));


 // * Coding Challenge // 
 
 const calcAverage = (a,b,c)=>{
    return (a+b+c)/3
 }
 console.log(calcAverage(7,3,5));

 const averageDolphins1 = calcAverage(44,23,71);
 const averageKoalas1 = calcAverage(65,54,49);

 function checkWinner1(averageDolphins1,averageKoalas1) {
    
    if(averageDolphins1>averageKoalas1){
    console.log(`winner is Dolphins with average of ${averageDolphins1}`);
 } else{
    console.log(`winner is Dolphins with average of ${averageKoalas1}`);
 }

 }
checkWinner1()
 
const data1 = averageDolphins1 + averageKoalas1
console.log(data1);


 const averageDolphins2 = calcAverage(85,54,41);
 const averageKoalas2 = calcAverage(23,34,27);

 function checkWinner2() {
    
    if(averageDolphins1>averageKoalas1){
    console.log(`winner is Dolphins with average of ${averageDolphins2}`);
 } else{
    console.log(`winner is Dolphins with average of ${averageKoalas2}`);
 }

 }
checkWinner2()
 
const data2 = averageDolphins2 + averageKoalas2
console.log(data2);

function checkWinnerData() {
    
    if(data1>data2){
    console.log(`winner is Data1 with average of ${data1}`);
 } else{
    console.log(`winner is Data2 with average of ${data2}`);
 }

 }
const dataWinner = checkWinnerData(102,88)