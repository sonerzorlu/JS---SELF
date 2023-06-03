// ? ========================================
// ?             STRINGS
// ? ========================================

const airlines ='TAP Air Portugal'
const plane = 'A320'

console.log(plane[0]);

console.log(airlines.indexOf('r'));
console.log(airlines.lastIndexOf('r')); // !string de ki son 'r' yi bulur

console.log(airlines.indexOf('Portugal'));
console.log(airlines.slice(4));
console.log(airlines.slice(4,7));

console.log(airlines.slice(0, airlines.indexOf(' ')));
console.log(airlines.slice(airlines.lastIndexOf(' ')));

console.log(airlines.slice(-2));
console.log(airlines.slice(2));
console.log(airlines.slice(1,-1));

const checkMiddleSeat= function (seat) {
    const s = seat.slice(-1);
    return s==='B' || s==='E' ? "you got the middle seat" : console.log('lucky!');
    
}


console.log(checkMiddleSeat('11B'));;
console.log(checkMiddleSeat('23C'));;

console.log(airlines.toLowerCase());
console.log(airlines.toUpperCase());

const passenger = "jOnAS"

const passengerLower = passenger.toLowerCase();
const passengerUpper = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerUpper);

const wrongEmail = '   SoNerZORlu@gmail.com';
const email = wrongEmail.toLowerCase().trim();
console.log(email);

const money = '145,57 ytl'
const para = money.replace(',','.').replace('ytl', 'tl')
console.log(para);
