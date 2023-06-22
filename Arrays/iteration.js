//?==============================================
// ?           for loop
//?        LOOPS IN ARRAYS
// ?==============================================

// const grades = [55,77,23,89,100]
//  let sum =0
// for(let i =0; i< grades.length;i++){
   
//   sum = sum + grades[i]

 

// } console.log(sum/grades.length);

// const arr= [-5,15,22,-4,45,78]
// let arrNegative = []
// let arrPositive = []

// for(i=0 ; i<arr.length ; i++){

//     if(arr[i]<0){
//         arrNegative.push(arr[i])
//     }else{
//         arrPositive.push(arr[i])
//     }
   
// }
// console.log(arrNegative);
// console.log(arrPositive);

// const student = ['soner','berrin','tarik','sare','elif']

// const findStudent = (name) =>{
//     let counter = 0
//     for( let i in student){
//     if( name === student[i]){
//         counter++ 
//     }}
    
//     if(!counter){
//         return `${name} not found`
//     }else{
//         console.log(`you got name ${counter} times`);
//     }
    


// }
// console.log(findStudent('sare'));

// //!==============================================
//  !           forEach()           /////////////

// let tops = 0
// // arr.forEach(x=> console.log(x)   )
// grades.forEach(x=>(sum+=x ))
// console.log(sum)

// const bakiye = [55,10,15,20,25,30,35,40]
// let sum1 = 0
// bakiye.forEach((x,i,arr)=>{
// sum1+= x*1
// console.log(`${i+1}.iteration =  ${sum1}`);

// arr[i] = Math.trunc(x*1.1)

// })
// console.log(bakiye);

// //!==============================================
//  !           map()    METHOD       /////////////

let names = ["Mustafa","Murat","Ahmet","Mustafa","Ayse","canan"];

const upperNames = names.map((sare)=>sare.toLocaleUpperCase())
console.log(upperNames)


const euro = 22.67
const dollar = 20.99
const tlprices = [250,300,500,600,780,900]

const tlDolar = tlprices.map((tl)=> Number((tl/dollar).toPrecision(4)))
console.log(tlDolar);
const tlEuro = tlprices.map((tl)=> Number((tl/euro).toPrecision(4)))
console.log(tlEuro);