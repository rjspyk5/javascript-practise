// // Task-1:
// // Write a function to convert temperature from Celsius to Fahrenheit.
// const givenTemperature = 20;
// const cToF = (given) => {
//   const value = (given * 9) / 5 + 32;
// };
// cToF(givenTemperature);

// // Task-2:
// // You are given an array of numbers. Count how many times the a number is repeated in the array.

// // sample-input: numbers = [5,6,11,12,98, 5]// find: 5
// const numbers = [6, 11, 12, 98];
// const find = (givenarray, searcingValue) => {
//   let count = 0;
//   for (const el of givenarray) {
//     if (el == searcingValue) {
//       count++;
//     }
//   }
//   return count;
// };

// const finded = find(numbers, 5);

// // Task-3:
// // Write a function to count the number of vowels in a string.
// const vowelCounter = (givenStrings) => {
//   let count = 0;
//   for (const givenString of givenStrings) {
//     if (
//       givenString == "a" ||
//       givenString == "e" ||
//       givenString == "i" ||
//       givenString == "o" ||
//       givenString == "u"
//     ) {
//       count++;
//     }
//   }
// };
// vowelCounter("hello this is rakibul");

// // Task-4:
// // Write a function to find the longest word in a given string.

// const longestWord = (given) => {
//   const splitedGivens = given.split(" ");
//   let longestLenght = " ";
//   for (const splitedGiven of splitedGivens) {
//     if (splitedGiven.length > longestLenght.length) {
//       longestLenght = splitedGiven;
//     }
//   }
// };

// // Task-5:
// // Generate a random number between 10 to 20.
// const ra = Math.random() * 20;
// const random = Math.round(ra) < 10 ? Math.round(ra) + 10 : Math.round(ra);

// // Leap Year
// const leapYear = (year) => {
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   } else if (year % 100 === 0 && year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // No duplicate
// const biriyaniKhors = ["abul", "babul", "tutul", "abul"];
// const uniqueArray = [];

// for (const biriyaniKhor of biriyaniKhors) {
//   if (!uniqueArray.includes(biriyaniKhor)) {
//     uniqueArray.push(biriyaniKhor);
//   }
// }
// // calculate the average of odd number
// const averageOfOddNumber = (numbers) => {
//   const value = numbers.reduce((acc, value) => acc + value);
//   const final = value / numbers.length;
//   return final;
// };

// // Swap with temp and with destrutring
// // using temp
// let a = 100;
// let b = 200;
// let temp;
// temp = a;
// a = b;
// b = temp;
// // using destructing
// let c = 10;
// let d = 20;
// [d, c] = [c, d];
// // Fibonacchi
// // Shopping cart products
// const products=[
//   {name:"Chiruni",price:300,quantity:1},
//   {name:"Chirun",price:5600,quantity:2}
// ]
// const total=products.reduce((acc,el)=>{
//  return acc+(el.price*el.quantity);
//   },0)

//   // Discount Calculator
//   // first 100=100;10-20=5;

//   let price;
//   const discount=(quantity)=>{
//     let remaining;
//     let total;
//     if (quantity>10) {
//       remaining=quantity-10
//       total=100;
//       if (remaining>10) {
//         remaining=remaining-10;
//         total=total+50
//        return total+(remaining*2)
        
//       } else {
//         return total+(remaining*5);
        
//       }

      
//     } else {
//       return quantity*10
      
//     }
//   }
//   //Basic Calculator
  const add=(nums)=>{

  holder= nums.reduce((acc,el)=>{return acc+el},0)
  return holder
  }

  console.log(add([5,9]));