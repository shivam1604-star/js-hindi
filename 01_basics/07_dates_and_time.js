// //dates

 let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);


let myCreatedDate = new Date('2020-12-01 12:00:00');
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); // string in milliseconds
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // string in milliseconds
console.log(Math.floor(Date.now()/1000)); // string in seconds

let newdate = new Date();
newdate.setTime(0);
console.log(newdate.toLocaleString());

newdate.setTime(1000*60*60*24*365*30);
console.log(newdate.toLocaleString());




