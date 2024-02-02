// Bmi-calculator
const bmi=(weight,height)=>{
    let Bmi=weight/(height**2)
   const holder= Bmi>18.5? Bmi>=18.5 && Bmi <=24.9? "You are normal":"You are overweight" :"you are underweight"
   return holder
}
// grade-calculator 
const gradeCalculator=(score)=>{
    switch (true) {
        case (score>=90 && 100>score):
            console.log("You got A");
            
            break;
        case (score>=80 && 89>=score):
            console.log("You got B");
            
            break;
        case (score>=70 && 79>=score):
            console.log("You got C");
            
            break;
        case (score>=60 && 69>=score):
            console.log("You got D");
            
            break;
        case (score<=59):
            console.log("You got F");
            
            break;
    
        default:
            break;
    }

}

gradeCalculator(0)