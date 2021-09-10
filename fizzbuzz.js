/*
    If the number is divisible by three 3 - Print "Fizz" instead of the number 
    If the number is divisible by five 5 - Print "Buzz" instead of the number 
    If the number is divisible by three 3 and five 5 - Print "FizzBuzz" instead of the number 

    Verify it witn number from 1 to 100

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
console.log("______________________");



/*
Practicing modulus operator
let a = 15%3;
console.log(a);*/


// First try to verify that we need to check both conditions first if dont  
// the conditional will print just "Fizz" or "Buzz"

/*
for (let i = 1; i <=100; i++){
    let mul3 = i%3;
    if(mul3==0){
        console.log("Fizz");
    }
    else{
        let mul5 = i%5;
        if(mul5==0){
            console.log("Buzz");
        }
        else{
            let mulThree = i%3;
            let mulFive = i%5;
            if(mulThree == 0  && mulFive == 0){
                console.log("FizzBuzz");
            }
            else{
                console.log(i);
            }
        }        
    }
    //console.log(i);
}
*/
