// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
const givenTemperature=20;
const cToF=(given)=>{
   const value=(given * 9/5) + 32;


}
cToF(givenTemperature)


// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]// find: 5
const numbers=[6,11,12,98]
const find=(givenarray,searcingValue)=>{
    let count=0;
    for (const el of givenarray) {
        if (el==searcingValue) {
            count++
            
        }

        
    }
    return count
}

const finded=find(numbers,5)




// Task-3:
// Write a function to count the number of vowels in a string.
const vowelCounter=(givenStrings)=>{
    let count=0
    for (const givenString of givenStrings) {
        
        if (givenString == "a" ||givenString == "e"||givenString == "i"||givenString == "o"||givenString == "u") {
            count++
            
        }
        
    }
    console.log(count);
}
vowelCounter("hello this is rakibul")

// Task-4:
// Write a function to find the longest word in a given string.

const longestWord=(given)=>{
    const splitedGivens=given.split(" ")
    let longestLenght=" ";
    for (const splitedGiven of splitedGivens) {
        if (splitedGiven.length>longestLenght.length) {
            longestLenght=splitedGiven
            
        }

        
    }
    console.log(longestLenght);
}

// Task-5:
// Generate a random number between 10 to 20.
const ra=Math.random()*20
const random=Math.round(ra) <10? Math.round(ra)+10: Math.round(ra)
