let score = "undefined"
console.log(score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof(valueInNumber));


// conversions
// "33" => 33
// "33abc" => NaN    , but iska type toh number hai
// true=1, false=0


let isLoggedIn = 1
let BooleanisLoggedIn = Boolean(isLoggedIn)
console.log(BooleanisLoggedIn);
console.log(typeof(BooleanisLoggedIn));



// 1= true, 0=false, ""=false, "abc"=true, null=false, undefined=false
 

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));