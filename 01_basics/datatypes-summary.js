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





 // **************memory management**************
 // stack memory(primitive) and heap memory(reference)

 let myYoutubeName = "shivamflicks"

 let anothername = myYoutubeName
 anothername = "shivamcricketworld"

 console.log(myYoutubeName);
 console.log(anothername);


 let userOne = {email : 'userone@example.com'}
 let userTwo = userOne

 userTwo.email = 'usertwo@example.com'

 console.log(userOne.email);
 console.log(userTwo.email);