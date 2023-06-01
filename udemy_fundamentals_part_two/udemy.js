// ? ========================================
// ?             ARRAYS
// ? ========================================


// const friend1 = 'Michael';
// const friend2= 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven','Peter' ]
// console.log(friends);

// const y = new Array(1991,1984,2008,2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// // friends = ['a', 'b']
// const firstName = 'Soner'
// const soner = [firstName,'Zorlu',2023 - 1985, 'developer',friends]
// console.log(soner);

// function calcAge1(birthYear) {
// return new Date().getFullYear() - birthYear;
//  }
// const years = [1990,1967,2022,2010,2018];


// console.log(calcAge1(years[0]));
// console.log(calcAge1(years[1]));
// console.log(calcAge1(years[2]));
// console.log(calcAge1(years[3]));

// console.log(calcAge1(years[years.length - 1]));
// console.log(years.length);
// const ages = [calcAge1(years[0]),calcAge1(years[1]),calcAge1(years[2]),calcAge1(years[3]),years[years.length - 1]];

// console.log(ages);

// ! add elements
// const friends = ['Michael', 'Steven','Peter' ]
// const newFriends = friends.push('Jay');
// console.log(friends);
// console.log(newFriends);

// // friends.unshift('John');
// console.log(friends);
// const newShift = friends.unshift('John')
// console.log(newShift);
// console.log(friends);


// //! remove elements

// friends.pop(); // last
// console.log(friends);
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // friends.shift();
// const remove = friends.shift(); // first
// console.log(remove);
// console.log(friends);


// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); // not present is -1

// friends.push(23);
// console.log(friends);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Steven')){
//     console.log(friends[friends.length - 3]);
// }
   

// const tip = bill=>{
//     return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2
// }
// const bills = [125,555,44]

// const tips = [tip(bills[0]),tip(bills[1]),tip(bills[2])]


// const total = [tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]]
// console.log(total);

// const all = [bills,tips,total]
// console.log(all);


// // ? ========================================
// // !            OBJECTS
// // ? ========================================

// const sonerFriends = [
//     'Soner',
//     'Zorlu',
//     new Date().getFullYear() - 1985,
//     'developer'
//     ["Fatih", "Nurettin","Kadir"]

// ]

// const soner = {
//     firstName : "Soner"
//     , lastName: " Zorlu",
//     age: "38",
//     job: "developer",
//     friends: ["Fatih", "Nurettin","Kadir"]

// }
// console.log(soner);

// console.log(soner.lastName);
// console.log(soner['lastName']);

// const nameKey= 'Name'

// console.log(soner['first' + nameKey]);
// console.log(soner['last' + nameKey]);
// console.log(soner.'last' + nameKey); //! doesnt work

// const interestedIn = prompt("what do you want to know about me? firstname, lastname, job, age, friends name? please let me know")

// // console.log(soner.interestedIn); // ! undefined

// console.log(soner[interestedIn]) ? `${console.log(soner[interestedIn])}` : `${console.log('wrong request')}`

// soner.school='fatih';
// soner['location'] = 'istanbul';
// console.log(soner);
// console.log(`sonerin 3 arkadasi vardir :(${soner.friends} ) ve en iyi arkadasi ${soner.friends[2]}'dir`);

// const soner = {
//     firstName : "Soner"
//     , lastName: " Zorlu",
//     age: "38",
//     job: "developer",
//     friends: ["Fatih", "Nurettin","Kadir"]

// }

// ? ========================================
// !            object methods
// ? ========================================


// const soner = {
//     firstName : "Soner"
//     , lastName: " Zorlu",
//     birthYear: 1985,
//      birthYear: '1985', // ? gives us the same result for 'this' method
//     job: "developer",
//     friends: ["Fatih", "Nurettin","Kadir"],
//     hasDriversLicense: true,

//     calcAge:function () {
//        console.log(this); //! after using 'this' the line(code) works
//        return 2023 - birthYear
//        return 2023 - soner.birthYear
//         return 2023 - this.birthYear //! 'this' works here as object itself }

//     calcAge:function (){
//        return this.age = 2023 - this.birthYear
//     },
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()} years old teacher, and he has  ${this.hasDriversLicense ? "a" : 'no'} driver license` 
//     }
// }

//  console.log(soner.calcAge());
// console.log(soner['calcAge'](1991));
// console.log(soner);

// console.log(soner.getSummary() );


// ? codding challenge 

// const mark = {
//     fullName : "Mark Miller",
//     mass : 78 ,
//     height : 1.69,
//     calcBMI : function(){
       
//         // return this.mass/(this.height*this.height)
//         this.BMI =  this.mass/(this.height**2);
//         return this.BMI
//     },
  
// }
// const john = {
//     fullName : "John Smith",
//     mass : 92 ,
//     height : 1.95,
//     calcBMI : function(){
       
//         // return this.mass/(this.height*this.height)
//         this.BMI =  this.mass/(this.height**2);
//         return this.BMI
   
//     },
    
// }

// console.log(mark.calcBMI());// ! function expression
// console.log(mark.BMI);
// console.log(john.calcBMI());
// console.log(john.BMI);
// console.log(`${mark.fullName}'s BMI: ${mark.BMI} is higher then ${john.fullName}'s BMI: ${john.BMI}`);


// const soner = [
//   "Soner",
//  " Zorlu",
//  "38",
//  "developer",
//  ["Fatih", "Nurettin","Kadir"] 
// ];
// for(let i=0;i<soner.length;i++){
//     console.log(soner[i]);
// }

const data1= [17,21,23];

console.log(`...${data1[0]}°C ...${data1[1]}°C ...${data1[2]}°C ...`);

const printForecast = function(arr){
let str =''
    for(i=0;i<arr.length;i++){
        str = str + `${arr[i]}°C in ${i + 1}days... `;

    } 
    console.log(str);
}
printForecast(data1)
   