// Find the lowest number
const highest=[167,190,120,165,137]
let max=0;
for (const num of highest) {
    num>max && (max=num)  
}

// Find the smallest name
const names=["rahim","robin","rafi","ron","rahsed"]
let bigname="";
for (const nam of names) {
  nam.length>bigname.length && (bigname=nam)
    
}
// Calculate total budget
const calculateElectronicsBudget=(laptop,tablets,mobile)=>{
    return laptop+tablets+mobile
}

//array Average
const phone=[
    {model:"PhoneA",brand:"Iphone",price:9},
    { model:"phoneB",brand:"Samsung",price:4},
    {model:"PhoneC",brand:"Nokia",price:3},
    {model:"phoneD",brand:"Iphone",price:10}
]
const findAveragePhonePrice=(ar)=>{
  const total=ar.reduce((acc,current)=> {
   return acc+parseInt(current.price)
},0)
  return total/ar.length

}
let holder=findAveragePhonePrice(phone)
// Salary Calculation
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const totalSalaryCompanyHaveTogive=(ar)=>{
  return holder=ar.reduce((acc,cur)=>{
  return holder= (cur.increment*cur.experience+cur.starting)+acc
  },0)
}

// Loop through an object and print the key-value pairs with their types

// Input:

// let myObject = {

// name: 'John Doe',
// age: 25,
// city: 'Example City',
// isStudent: true
// };

// Output:


// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean