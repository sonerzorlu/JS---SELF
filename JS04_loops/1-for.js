// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

// //? Ornek: 1 den n kadar sayilari toplayan kodu yaziniz.

const n = Number(prompt("Enter a number"))

let sum=0
for( i=1 ; i<=n ; i++){
  sum=sum+i
}

// //? Ornek: 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
// //? for dongusu ile yaziniz..

const num = Number(prompt("Enter a number"))

for(let i=1;i<=num; i++){
  let random= Math.trunc(Math.random*100)
  console.log(`${i}. random number: ${random}`);
}


//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.


//? Flag method
const primeNum = Number(prompt("enter a number"))

let isPrime = true

if (primeNum < 2){
  console.log("enter a bigger number");
} else{
  for(i=2 ; i<=primeNum;i++){
    if(primeNum%i===0){
      console.log(`${primeNum} is not a prime number at iteration : ${i}`)
      isPrime=false;
      break       
    }

  }
}
if (isPrime===true ){
  console.log(`${primeNum} is a prime number`);
}
