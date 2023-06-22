
//? nested
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
  person4: "JS",
}
console.log(people.person1.name);



//! ASSIGMENT
//? person2'nin adini ve maasini yazdiriniz.
console.log(people)
console.log(people.person2.name)
console.log(people.person2.salary)

//? people objesindeki tum salary 'leri yazdirin (Dongu kullanilmali)

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }
// ;("strict")
for ( person in people) {
  console.log(person);
  console.log(people[person]);
  console.log(people[person].salary);
}

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }

console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

for(let key of Object.keys(people)){
  console.log(key);
}
for(let v of Object.values(people)){
  console.log(v);
}
for(let [k,v] of Object.entries(people)){
  console.log(` KEY: ${k} VALUE: ${v.name}`);
}

//! Array Methods

Object.values(people).forEach(p => console.log(p));

Object.values(people).forEach(p => console.log(p.name));
Object.values(people).filter(p => p.job === 'developer').forEach(p=>console.log(p.dob))

//********************************************************
//* JSON => Javascript Object Notation
//********************************************************
const team = [
  { name: "Josh", surname: "Adams", job: "developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
] //* JSON
team.push({name:'soner',surname:'zorlu',job:"teacher",age:38})
console.log(team);

team.forEach(p=>console.log(p.job))
const agesPlusOne = team.map(a=> a.age +1)
console.log(agesPlusOne);

const fullName = team.map((p)=> {
  return{  fullName: p.name.toLocaleUpperCase() + ' '+ p.surname.toLocaleUpperCase(),
    age: p.age + 5}
  
  
})
console.log(fullName);

const ages22 = team.filter(p=> p.age<=22).map(p=> p.name)
console.log(ages22);
const avarAges = team.reduce((a,b)=>a+b.age,0) / team.length
console.log(avarAges);