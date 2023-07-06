console.log("**** CREATE NODE ****")

//?Yeni bir P elementi olusturalim
const newPar = document.createElement("p")
const textPar = document.createTextNode("this is a p element")
newPar.appendChild(textPar)
console.log(newPar);
const h2 =document.querySelector('.item-list h2')
console.log(h2);
h2.after(newPar)
h2.before(newPar)


//?INPUT value   jjhbbbbb  

const input = document.getElementById("input")
console.log(input.value);

//? id ,class
newPar.id = 'par'
newPar.className = "center red"


//? setAttribute


//? classList
newPar.classList.add("bg-tomato","left")
newPar.classList.remove("left")

if(!newPar.classList.contains("blue")){
  newPar.classList.add("blue")
}else{
  newPar.classList.add("orange")
}
//? toggle
newPar.classList.toggle("white")
//? getAttribute()

console.log(newPar.getAttribute("class"));

console.log(newPar.getAttribute("id"));

console.log(newPar.getAttribute("name")); //? null

console.log(input.getAttribute("type"));
//? alternative

//? INNER HTML (Ciddi Guvenlik aciklari var)

