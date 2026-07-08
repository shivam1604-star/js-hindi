// const name = "John"
// const age = 30

// console.log(" My" +" name" + " is" + name + + age + " years old")    // old way to do concatinate the strings

// console.log(`My name is ${name} and I am ${age} years old`)     // new way to do concatenation (template literals)

// // concatenation and template literals => next line
// // Traditional string concatenation merges strings using operators like +, whereas JavaScript Template Literals use backticks (`) and placeholders (${expression}) to inject values directly.




const gameName = new String("Cricket")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(typeof gameName);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.length);

// console.log(gameName.slice(0, 3));
// console.log(gameName.replace("Cricket", "Football"));
// console.log(gameName.split("i"));
// console.log(gameName.trim());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("c"));
// console.log(gameName.lastIndexOf("c"));
// console.log(gameName.includes("Cricket"));   // //for checking whether the string contains a specific substring or not, and it returns a boolean value (true or false) based on the presence of the substring.



const newString = gameName.substring(0, 3);
console.log(newString);
 
const anotherString = gameName.slice(-5, 3);  // -indexing only works in slice method not in the substring method
console.log(anotherString);

const newStringOne = "      Shivam  ";
console.log(newStringOne.trim());

const url = "https://www.youtube.com/watch?v=abc123"
console.log(url.replace('?', '-'));

console.log(url.split('.'))     // it will split the string into an array of substrings based on the specified delimiter (in this case, the period character '.'). The resulting array will contain the individual parts of the URL that were separated by periods.