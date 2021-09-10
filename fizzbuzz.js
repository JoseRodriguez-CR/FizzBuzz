/*
    If the number is divisible by three 3 - Print "Fizz" instead of the number 
    If the number is divisible by five 5 - Print "Buzz" instead of the number 
    If the number is divisible by three 3 and five 5 - Print "FizzBuzz" instead of the number 

    Verify it witn numbers from 1 to 100

    */


function fizzBuzzSequent (limit){
    for (let i = 1; i <=limit; i++){
        let mulThree = i%3;
        let mulFive = i%5;
        if(mulThree === 0  && mulFive === 0){
            console.log("FizzBuzz");
        }
        else{
            let mulThree = i%3;
        if(mulThree === 0){
            console.log("Fizz");
        }
        else{
            let mulFive = i%5;
            if(mulFive === 0){
                console.log("Buzz");
            }
            else{
                console.log(i);
                }
            }
        }
    }
}

fizzBuzzSequent(100);
console.log("___________The_End___________");
