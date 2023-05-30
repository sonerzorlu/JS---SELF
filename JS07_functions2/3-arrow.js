// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** 3-ARROW ****")

//* ORNEK: Silindir Hacmi
//******************************************/

// //? hacim = Pi x r x r x h
// const r = +prompt("r")
// const h = +prompt("h")

// const volume = (a,b) => Math.PI*a*a*b
// console.log(`yari capi ${r} yuksekligi ${h} olan silindirin hacmi : ${volume(r,h).toFixed(2)}'dur`);
// console.log(`yari capi ${r} yuksekligi ${h} olan silindirin hacmi : ${volume(r,h).toPrecision(5)}'dur`);

// //? toPrecision(4) aldigi parametreye gore bir sayinin tam ve kesir
// //? kisimlarinin ne kadarini gosterilecegini belirlemek icin
// //? kullanilabilir. 4 degeri tam ve kesir icin toplam 4 basamak kullan demektir.


// //? toExponential() ise bir sayinin bilimsel (10 uzeri) olarak
// //? gosterimesi icin kullanilabilir. Aldigi parametre ise kesirli
// //? kisimlarinin basamak sayini gosterir.


// //* ORNEK: Yas hesapla
// //************************************************/
//! ERROR: Once tanimla sonra kullan
//!Funct expression ve arrow func yontemlerinde
//! Once fonks tanimlanmalidir sonra cagrilmalidir.
//! Aksi takdirde hata alrsiniz.


// const calculateAge = (year) => new Date().getFullYear() - year
//  console.log("AGE:", calculateAge(1935))


//?-----------------------------------------

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
// fibo(6) => 8


// const fibo = (n) => {
//     let fib1 = 1
//     let fib2 = 1
//     let sum = 0

//     for( let i =3 ; i<=n ; i++){
//         sum = fib1 + fib2
//         fib1=fib2
//         fib2=sum
//     }
//     return fib2
// }

// ! RECRUSION for fibonacci

const fibo = (n) =>{
    if(n===1 || n===2){
        return 1
    }
    return fibo(n-1) + fibo(n-2)
}

 

const n = +prompt(" please enter n:")
console.log(`FIBONACCI(${n}) = ${fibo(n)}`);

// ! RECRUSION for factoriel

const facto = (n) =>{
    if(n===1 || n===2){
        return 1
    }
    return n*facto(n-1)
}



const n = +prompt(" please enter n:")
console.log(`FACTORIEL(${n}) = ${facto(n)}`);