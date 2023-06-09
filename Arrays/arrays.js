// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******")

//* Dizi Tanimlama
//*-----------------------------------------------

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const names = ["emir", "oğuzhan", "levent", "tarik"]

console.log(names)

//? 4 (names dizisinin lenght property'sine erisiyoruz.)
//* non-primitive verilerde ozellikler olabilir ve bunlara
//* erisim . notasyonu ile olabilir.
console.log(names.length)

const x = 5.234 //? primitive
console.log(x.toFixed(2)) //? object wrapper sayesinde
//? Primitive'lerde normal sartlarda property olmaz.

//? Ancak JS kullanimi kolaylastirmak icin bazi durumlarda
//? primitive verileri bir obje sarmlayicisi ile sarmalar.

console.log(typeof names) //? JS de array aslinda object dedigimiz base object'den turetilmistir.

const emptArr = []
console.log(emptArr)

// ! 2.Yöntem (Object Constructor)
const codingLangs = new Array("C", "C++", "JS", "Go")
console.log(codingLangs)

const numbers = new Array(3, 2, 1)
console.log(numbers) //? (3) [3, 2, 1]

//? 10 elemanli bos bir dizi olusturur.
const numbers1 = new Array(10)
console.log(numbers1) //?(10) [empty × 10]

// ! 3.Yöntem (Array.of())
const number2 = Array.of(1, 2, 3)
console.log(number2) //?(3) [1, 2, 3]

const numbers3 = Array.of(5)
console.log(numbers3) //? [5]

//* Diziden Veri Okuma-Yazma (indisleme)
//* ----------------------------------------------
//!  Diziden veri okuma

//? Dizilere erisirken indis(index) yani sira numarasi kullanilir.
//? indisler 0'dan baslar ve dizinin eleman sayisinin bir eksigine
//? kadar devam eder.
//? Syntax => diziAdi[indis]

const names1 = [
  "emir",
  "oğuzhan",
  "levent",
  "tarik",
  "Sabata",
  "Mehtap",
  "Rose",
]
console.log(names1[1]) //? oğuzhan
const tarik = names1[3]
console.log(tarik) //?tarik

//? Dizinin en son elemanini okumak istiyoruz.
console.log(names1[5]) //? Mehtap, (hard-coded)

const lastEl = names1[names1.length - 1]
console.log(lastEl) //? Rose

//? Alternative olarak at() metodu
console.log(names1.at(-3)) //? Sabata

//!  Diziye veri yazma
names1[2] = "Levent"
// names1[2] = names1[2].toUpperCase()
//? assigning yapildiginda etki eder.

console.log(names1)

//! Identifier 'names' has already been declared
// const names = ["ismet", "canan"]

// names = ["ismet", "canan"] //! Assignment to constant variable.

//! NOT: Bir dizi const ile tanimlansada icerisindeki elemanlar
//! degisitirilebilir. Cunku diziler non-primitive verilerdir.
//! const ile tanimlanan bir dizinin referansi (baslangic adresini)
//! stack alaninda tutulurken dizinin elemanlari Heap alaninda tutulur.
//! Bu yüzden dizinin referansi bilindikten sonra icerisindeki elemanlari
//! degistirmek mumukundur.
//! const, sadece dizinin stackte tutulan adresinin degistirilmesini engeller.

//! Diziler farkli veri tiplerini bir arada saklayabilir.
const ageArr = [22, 44, 55]
const people = [
  "John",
  "Varmont",
  new Date().getFullYear() - 1990,
  true,
  ageArr,
]

console.log(people[4]) //?(3) [22, 44, 55]

console.log(++people[4][1]) //? 45

console.log(people) //?(3) [22, 45, 55]
console.log(ageArr) //?  ['John', 'Varmont', 33, true,  [22, 45, 55]]
ageArr[0]--

console.log(people) //?(5) ['John', 'Varmont', 33, true, [21, 45, 55])]

//! Bir dizi icerisine baska bir diziyi koyarsak aslinda dizinin
//! tum verileri kopyalanmaz sadece o dizinin refransi konulur.
//! Dolayisiyla disarida bu dizideki bir degisikli diger dimizie de yansir.
//! Cunku JS cogu durumda sig (shallow copying) yapar.
//?================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//?================================================

//** pop() son elemani siler ve sildigi elemani dondurur.
const cars = ["BMW", "Mercedes", "Fiat", "Anadol"]

console.log(cars.pop());
console.log(cars);

console.log(cars.push("Lexus"));
console.log(cars);

 console.log(cars.unshift("Togg"));
console.log(cars);

console.log(cars.shift());
console.log(cars);


(cars.splice(1,0, "VW"));
console.log(cars);
// (cars.splice(1,1));
// console.log(cars);
// (cars.splice(1));
// console.log(cars);

(cars.splice(3,1));
console.log(cars);
(cars.splice(3,0, "Maseratti"));
console.log(cars);

console.log(cars.reverse());

const number = [12,45,2,88,19,7,9,1,3]
console.log(number.sort((a,b)=> b-a));
console.log(number.sort((a,b)=> a-b));




//?================================================
//?             DIZI ERISIM METOTLARI
//?================================================
const sayilar = [3, 5, 2, "4",
"four", 3, "4",
"bes","1"]

console.log(sayilar.indexOf(3));
console.log(sayilar.lastIndexOf(3));
console.log(sayilar.includes(3));
console.log(sayilar.toString());
console.log(sayilar.join(""));
console.log(sayilar.sort((a,b)=>b-a));

let data = [3,1,5,7,8,910,22,3]
console.log(++data[5]);
data = data.sort((a,b)=>b-a).join(",");
console.log(data);
console.log(sayilar);
console.log(sayilar.toString());

console.log(cars);
console.log(cars.slice(2,4));
console.log(cars.slice(2));
console.log(cars.slice(1));