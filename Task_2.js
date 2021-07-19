//          TASK 2
//  Write a function that accepts a positive integer and determines if it is a prime number.
// The function should return true if it is a prime number or false if it isn’t.


// SOLUTION
// For a number to be classified as a prime number, 
// it should have exactly two factors. i.e it should be divisible by 1 and itself.


// declaring a function that check for a prime number by passing num as an arguement

function isPrimeNumber() {
    
    // the user is prompted to enter a positive number
    // declaration of number 
    let numberStringInput = window.prompt(" Enter a positive integer to check for prime number ");

    // since the number variable entered is a string, to check weather it is a prime number, we need to convert it to a number 
    // using a parseInt javaScript method to convert (numberStringInput) variable to a proper number variable, the number is declared below
    let number = parseInt(numberStringInput);


    if (number < 2) return alert(false);
     // to check if input number is a positive integer
    
    // having done that, we use the for statement in javaScript to loop over numbers
    // we intend to use to check for the divisibility
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        //it should be noted that the "i" declared inside the for loop will always be less
        // than the javaScript method (Math.sqrt) to check for the square root of the number
        // since prime numbers are irrational, you would easily use the numbers less or
        // equal to the square root to test for divisibility
        
        // I then use the if and else statement to check if the number parameter is
        // divisible by i to either return true or false
        
        if (number % i === 0) {
            return alert(false); // when the declared number parameter is divisible by i return false
        } 
    }

    return alert(number > 1); // hence return true
        // the number must also be greater than 1, the reason for number >1)
}

// function Call
isPrimeNumber()