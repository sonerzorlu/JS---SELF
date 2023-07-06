

// const wait = (waitingTime)=>{
//   const starTime = new Date().getTime()
//    while (new Date().getTime() < starTime + waitingTime) {}
// }



// console.log('hello');
// console.time("myTimer")
// wait(3000)
// console.log("hi fs13");
// console.timeEnd("myTimer");

//* Asenkron (setTimeout)
//*-----------------------------------------------//
// console.log('time started');
// setTimeout(()=> {
//   console.log('1 sec');
// },1000)
// console.log('time finished');
// console.log('time started');
// setTimeout(()=> {
//   console.log('2 sec');
// },2000)
// console.log('time finished');
// console.log('time started');
// setTimeout(()=> {
//   console.log('3 sec');
// },3000)
// console.log('time finished');

//* Async (setInterval, clearInterval)
//*------------------------------------------------


// console.log('Timer started');
// let counter = 0
// let sec1 = setInterval(()=>{
//   console.log(++counter);
//   if(counter > 9){
//     clearInterval(sec1)
//     console.log('Timer finished');
//   }

// },1000)

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi")
  setTimeout(() => {
    console.log("Sarah: Hello")
    setTimeout(() => {
      console.log("John: How Are you?")
      setTimeout(() => {
        console.log("Sarah:Fine and you?")
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000) 

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)