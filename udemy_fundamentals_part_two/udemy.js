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
const friends = ['Michael', 'Steven','Peter' ]
const newFriends = friends.push('Jay');
console.log(friends);
console.log(newFriends);

// friends.unshift('John');
console.log(friends);
const newShift = friends.unshift('John')
console.log(newShift);
console.log(friends);


//! remove elements

friends.pop(); // last
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

// friends.shift();
const remove = friends.shift(); // first
console.log(remove);
console.log(friends);


console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // not present is -1

friends.push(23);
console.log(friends);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Steven')){
    console.log(friends[friends.length - 3]);
}
   

const tip = bill=>{
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2
}
const bills = [125,555,44]

const tips = [tip(bills[0]),tip(bills[1]),tip(bills[2])]


const total = [tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]]
console.log(total);

const all = [bills,tips,total]
console.log(all);


