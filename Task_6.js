//      TASK 6
// Write a function that takes two parameters, an array and some number. The function should determine whether any
// three numbers in the array add up to the number.If it does, the function should return the numbers as an array.
// If it doesn’t, the function should return -1.
// Example
// Input: [1, 2, 3, 4, 5, 6], 6
// Output: [1, 2, 3]

// SOLUTION

// we first defined an arraySize variable to determine from the
// user the number of items they intend to store inside their array
let arraySize = prompt("how many items do you want to store in your array? ")
alert("click ok to store " + arraySize + " items inside your array")

// the inputArray is defined as an empty array that would hold a user array size
// as predetermined in arraySize defined above
let inputArray = []

// using the for loop to accept user inputs and using javascript push() method
// to store data inside "inputArray"
for (let i = 0; i < arraySize; i++){
    inputArray.push(Number(prompt("Enter numbers to store in your " + arraySize+ " sized array: " + (i + 1),)))    
}
 
const sumNumber = parseInt(prompt("Enter the Number to check for sum "))
alert("click ok to find out three numbers that add up to your constant number") 


// having done that let's write a function that will take two parameters
// an array containing user input and sum
function checkThreeSums(arrayStore, sum) {
    // we declare the i variable to run through our array size
    for (let i = 0; i < arrayStore.length; i++){
 
        // we iterate through the second element inside the for loop of the first
        // by declaring j i.e i + 1
        for (let j = i + 1; j < arrayStore.length - 1; j++){
 
            // to find the third element, we iterate through the remaining array size
            // k which is an addition of 1 to k
            for (let k = j + 1; k < arrayStore.length - 2; k++){
                if (arrayStore[i] + arrayStore[j] + arrayStore[k] == sumNumber){
                    return document.write("Triplet is " + arrayStore[i] + ", " + arrayStore[j] + ", " + arrayStore[k]);
                } 

            }
        }
    }
    
    // if three numbers do not add up to the sum, return [-1]
    return document.write ("[" + -1 + "]")

}

// function Call

checkThreeSums(inputArray, sumNumber)
