// Break continue practise
for (let index = 0; index < 200; index++) {
 
 
  if (index==100) {
    break
    
  }
    
}
// odd number between 61 to 100
const oddNumber=(num)=>{

 for (let index = 61; index >=61 && index<=100; index++) {
if (index%2 !==0) {
 return index
}
 }

}
oddNumber(200)

// Find all the even numbers from 78 to 98.


const evenNumber=(num)=>{

  for (let index = 78; index <num; index++) {
    if (index>99) {
      break
      
    }
   
 if (index%2==0) {
  

 }
  }
 
 }
evenNumber(100)
// Display sum of all the odd numbers from 91 to 129.
let sum=0;
for (let index = 91; index < 128; index++) {
  if (index%2!==0) {
    sum+=index   
  }
}

// Display sum of all the even numbers from 51 to 85.
let sum2=0;
for (let index = 51; index <= 85; index++) {
  if (index%2==0) {
    sum2+=index   
  }
}

// Generate a multiplication table for number 9
for (let index = 0; index <= 50; index++) {
 console.log(`9*${index}=${index*9}`);
  
}

