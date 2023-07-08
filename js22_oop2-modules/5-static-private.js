//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.


class Book {
  #id = '12345'
  static counter = 0
  constructor(title,author,year){
    this.title =title
    this.author = author
    this.year = year
    this.#id = 555

    Book.counter++
  }

  getSummary(){
    return `Book title: ${this.title}, Author name:${this.author}, Year:${this.year}, Age:${this.#computeAge()}`
  }
  getId(){
    return this.#id
  }
  setId(id){
    this.#id = id
  }
  #computeAge(){
    return new Date().getFullYear() -this.year
  }

}
const book1 = new Book('Simyaci','Paulo Coelgo',1988)
console.log(book1);
console.log(book1.getId());
console.log(book1.setId(12333333));
console.log(book1);
// console.log(book1.#computeAge());
console.log(book1.getSummary());
console.log(Book.counter);
const book2 = new Book('Kirmizi','Orhan Pamuk',2018)
console.log(Book.counter);

const book3 = new Book('Masumiyet Muzesi','Orhan Pamuk',2013)
console.log(Book.counter);