// 1. Use charAT method print 'y' from string below.
// let greeting = 'Hello. My name is John';
// console.log(greeting.charAt(8));

// // 2. Use slice method print string have value 'is upon us' from string below.
// let str1 = 'The morning is upon us.';
// console.log(str1.slice(12,str1.length));

// // 3. Use concat print new string with value 'Hello WOrld' from string below.
// let str2 = "Hello";
// let str3 = 'World';
// console.log(str2.concat(' ',str3));


// // Request user input full Number and output first name and last name
// const fullName = prompt('Input your full name.');
// const firstSpace = fullName.indexOf(' ');
// const firstName = fullName.slice(0,firstSpace);
// const lastName = fullName.slice(firstSpace,fullName.length);

// console.log(`First Name : ${firstName}`);
// console.log(`Last Name : ${lastName}`);

// Input sec print hour ,min,sec
let InputSec = Number(prompt('Input Sec'));
let Hour = Math.floor(InputSec / 3600);
let min = Math.floor((InputSec%3600)/60);
let sec = InputSec%3600%60;
console.log(`${Hour}h : ${min}m : ${sec}s`);