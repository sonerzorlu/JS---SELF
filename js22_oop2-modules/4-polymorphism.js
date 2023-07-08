//* =====================================
//*      OOP -  Polymorphism(ES6)
//*=====================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

console.log("Polymorphism")

class Book {
  constructor(title,author,year){
    this.title =title
    this.author = author
    this.year = year
  }

  getSummary(){
    return `Book title: ${this.title}, Author name:${this.author}, Year:${this.year}`
  }
  getAge(){
    return `${new Date().getFullYear() - this.year}` // Current date object's year property value
  }
  setPrice(price){
    this.price = Math.trunc(price *1.1)
  }
}

class Magazine extends Book{
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month
}

setPrice(price,taxRate = 1.3){
  this.price = Math.trunc(price * taxRate)

}
getSummary(){
  return `Book title: ${this.title}, Author name:${this.author}, Year:${this.year}, Mounth:${this.month}`
}
getFullSummary(){
 return super.getSummary()
 
}
}
const mag1= new Magazine('sre','Einstein',1930,'november')
console.log(mag1);

mag1.setPrice(100,1.2)
console.log(mag1.price);
console.log(mag1.getFullSummary());

  //! Overloaded Metot (Ayni metodun farkli parametreler ile kullanilmasi)
 

  //! Overrided Metot (Parent class'daki bir metodun farkli
  //! fonksiyonellikle ve ayni parametre listesi ile yeniden tanimlanmasi)


//? Magazine objesinin yeni bir instance

