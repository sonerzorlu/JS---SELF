//* =============================================
//*        OOP - Object Constructor (ES5)
//* =============================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

//? Object Constructor

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`}

function Book(title,author,year) {
  this.title = title
  this.author = author
  this.year =year
  // this.getSummary = function () {
  //   return `${this.title} was written by ${this.author} in ${this.year}`
  // }
  
}

const book1 = new Book ('Kasagi','Omer Seyfettin',1920)
console.log(book1);
console.log(book1.getSummary());

const book2 = new Book('Simyaci','Paulo Chello','1990')
console.log(book2);
console.log(book2.getSummary());


console.log(Book.prototype);
console.log(book1.__proto__); //? alternative approach

book1.price =250
Book.prototype.price = 340
console.log(book2.price);

 function Magazin(title,author,year,month){
  Book.call(this,title,author,year)
  this.month
 }
Magazin.prototype = Object.create(Book.prototype)

const mag1= new Magazin('sre','Einstein',1930,'november')

console.log(mag1);



//! Prototype, belirli bir Nesne'nin (Object) tum instance'larina
//! kolay bir sekilde metotlar tanimlamaya izin vermektedir.
//! Prototip alaninda bir metot tanimlamanin avantaji bu metot'un
//! olusan tum instance'larin belleginde yer kaplamamasi ancak tum
//! instance'larin bu metota ulasabilmesidir.

//* Ornegin Book nesnesinin tum instance'lari getSummary() fonksiyonunu miras alabilir.
//* Ancak, getSummary() fonksiyonu bellekte sadece bir yer kaplamaktadir.


