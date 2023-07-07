//* ==============================================
//*      OOP - Classes and Inheritance (ES6)
//* ===============================================

//? Classes'lar, object (nesne) olsuturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)

console.log("*** ES6 - Classes ***")
class Book{
  constructor(title,author,year,description){
    this.title = title
    this.author = author
    this.year = year
    this.description = description
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
  getAge(){
    return `${new Date().getFullYear() - this.year}`
  }
  
}


const book1 = new Book('Kasagi','Omer Seyfettin',1920)
console.log(book1);
console.log(book1.getSummary());


const book2 = new Book('Simyaci','Paulo Chello','1990')
console.log(book2);
console.log(book2.getSummary());
console.log(book2.getAge());


class Magazin extends Book {

  constructor(title,author,year,month){
    super(title,author,year)
    this.month = month
  }
}
const mag1= new Magazin('sre','Einstein',1930,'november')
console.log(mag1);
