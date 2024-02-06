// // Task-1:
// // Write a function to convert temperature from Celsius to Fahrenheit.

const celToFa = (given) => {
  return given * (9 / 5) + 32;
};

// // Task-2:
// // You are given an array of numbers. Count how many times the a number is repeated in the array.
const repeatedValue = (arr, find) => {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === find) {
      count++;
    }
  }
  return count;
};

// // Task-3:
// // Write a function to count the number of vowels in a string.
const vowelChecker = (letterr) => {
  let count;
  let letter = letterr.toLowerCase();
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    count++;
  }
  return count;
};

// // Task-4:
// // Write a function to find the longest word in a given string.
const largestWord=(sentences)=>{
  let wordArray=sentences.split(",")
  let higestWord=wordArray[0]
  for (const word of wordArray) {
    if (word.length>higestWord.length) {
      higestWord=word
      
    }

    
  }
  return higestWord
}


// // Task-5:
// // Generate a random number between 10 to 20.
const randomTenToTwenty=()=>{
const random= Math.round(Math.random()*20) 
const tenToTwenty=random < 10? (random+10) : random;
return randomTenToTwenty
}



// // Leap Year
const leapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

// // No duplicate

const noDuplicate=(arr)=>{
  let uniqueArray=[]
  for (const el of arr) {
  if (!uniqueArray.includes(el)) {
    uniqueArray.push(el)    
    }
    return uniqueArray
  }
}

// // calculate the average of odd number
const averageOfOdd=(arr)=>{
  let sum=0;
  for (const el of arr) {
    if (el%2!==0) {
      sum+=el
      
    }
    
  }
  return sum/arr.length
}

// // Swap with temp and with destrutring
// Swap Using temp
let a=10,b=500,temp=0;
temp=a;
a=b;
b=temp;

// // using destructing
let c=50,d=600;
[d,c]=[c,d]
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

//   array-looping-tasks
//   Task 1
//   Write a JavaScript code to reverse the array colors without using the reverse method.

//   Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

//   Output:

//   ['orange', 'yellow', 'green', 'blue', 'red']

//   Task 2
//   Write a JavaScript code to get the even numbers from an array using any looping technique.

//   Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

//   Output:

//   [12, 98, 76, 46]

//   Task 3
//   Use a for...of loop to concatenate all the elements of an array into a single string.

//   Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

//   Output:

//   'TomTimTinTik'

//   Task 4 (Hard)
//   Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

//   Input: const statement = 'I am a hard working person'

//   Output:

//   'person working hard a am I'

//   Simple function Related Practice Tasks
// Task-1
// Take four parameters. Multiply the four numbers and then return the result

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

// js-problems-part1-practice-tasks
// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

// Task-3:
// Write a function to count the number of vowels in a string.

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// Task-5:
// Generate a random number between 10 to 20.

// js-problems-part2-practice-tasks
// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input

//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 },
//     ];
// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];
