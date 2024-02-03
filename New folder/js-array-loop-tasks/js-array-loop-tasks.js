// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors=["red","blue","green","yellow","orange"]
const reversedColors=[]
for (const color of colors) {
    reversedColors.unshift(color)
    
}


// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers=[12,98,5,41,23,78,46]
for (const number of numbers) {
    if (number%2==0) {
    
        
    }
    
}

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

const names=["Tom","Tim","Tin","Tik"]
let sum=""
for (const name of names) {
    sum+=name
    
}



// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement="I am a hard working person"
const statementArray=statement.split(" ")
const reversedStatement=statementArray.reverse().join(" ")

