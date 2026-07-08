// Primitive data types
// 7 types => String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue =100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3376297356893n
console.log(bigNumber);

// reference (non-primitive)
// Array, Objects, Functions

 const heros = ['shaktiman', 'naagraj', 'doga']
 console.log(heros);
  
 let myObj = {
    name : 'shiva',
    age : 21,
 }
 console.log(myObj);

  myFun = function(){
    console.log("Hello, World!")
 }
 console.log(myFun);

 console.log(typeof myFun);