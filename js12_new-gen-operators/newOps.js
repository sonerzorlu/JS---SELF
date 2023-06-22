//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================

// const myH2 = document.getElementsByTagName("h2")
// myH2[0].style.color = "red"

console.log("****** NEW OPERATORS *******")

//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================

// const car = {
//   name: "BMW",
//   model: 1990,
//   engine: 1.6,
//   colors: ["blue", "purple"],
// }

// console.log(car);

// const name1 = car.name
// console.log(name1)
// const model1 = car.model
// console.log(model1);
// const { name, model, engine}= car
// console.log(engine);

const myH2 = document.getElementsByTagName("h2")
console.log(myH2[0].style.color="red ");

const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
}

const {car1,car2} = cars
console.log(car1,car2);
const {car1:{model},car2:{engine}} = cars
console.log(car1.model,car2);

const model2 = cars.car1.model
console.log(model);

const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  }
]
//* Classical
team.forEach((t, i) => {
  console.log(i + 1 + ".NAME:", t.name)
  console.log("SURNAME:", t.surname)
  console.log("JOB:", t.job)
  console.log("AGE:", t.age)
  console.log("*************")
})

//* destructre
team.forEach((t,i)=>{
  const {name,surname,job,age} = t
  console.log(i + 1 + ".NAME:", name)
  console.log("SURNAME:", surname)
  console.log("JOB:", job)
  console.log("AGE:", age)
  console.log("*************")
})