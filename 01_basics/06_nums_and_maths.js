// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(9))          // fixed is used to convert number into string with specified decimal 

// const othernumber = 100.123456789
// console.log(othernumber.toPrecision(16))      // precision is used to convert number into string with specified total length of number including decimal and integer part

// const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"))   // toLocaleString is used to convert number into string with specified locale format



// //*****************Maths in js***************
 console.log(Math);
 console.log(Math.PI); 
console.log(Math.E); // Euler's number is the base of natural logarithm, approximately equal to 2.71828
 console.log(Math.round(4.7)); // 5
 console.log(Math.floor(4.7)); // 4
 console.log(Math.ceil(4.1)); // 5
 console.log(Math.trunc(4.9)); // 4     // it removes the decimal part of a number and returns only the integer part
 console.log(Math.pow(2, 3));
 console.log(Math.sqrt(16));
 console.log(Math.abs(-4.7));


 console.log(Math.min(1, 2, 3, 4, 5));
 console.log(Math.max(1, 2, 3, 4, 5));
 console.log(Math.random());       // it returns a random number between 0 and 1

const randomNumber = Math.floor(Math.random() * 10) + 1; // it returns a random number between 1 and 10
console.log(randomNumber);
const randomNumber2 = Math.floor(Math.random() * 100) + 1; // it returns a random number between 1 and 100
console.log(randomNumber2);
