// Declaring an array

const fruits=["apple","banana","orange","Mango","watermelon"]
fruits[2]="Jambura"


// Add or remove elements
const place=["coxs-bazar","Rangamati","Bandarban"]
place.push("kuakata")
place.push("Sylet","Rajssahi")
place.pop()

// Checking array membership with 'includes"
const books=["Bangla","Compact It solution","Math"]
if (books.includes("Bangla")) {
    console.log(`Your desired book position is at index ${books.indexOf("Bangla")}`);

} else {
    console.log("Sorry i didn't find your books");
    
}
// Checkin if it's an array
const fruitsC=["apple","Banana"]
const laptop={
    model:"hp",
    price:38
}
console.log(Array.isArray(fruits));

console.log(Array.isArray(laptop));
// Combining Arrays
const firstArray=["one","two","three"]
const secondArray=["five","six","seven"]
console.log(firstArray.concat(secondArray));

console.log([...firstArray,...secondArray]);