//      Task 7
// Write a function that takes an array of positive integers and calculates the standard deviation of the numbers.
// The function should return the standard deviation.

// SOLUTION


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
 
// const sumNumber = parseInt(prompt("Enter the Number to check for sum "))
alert("click ok to Know the standard deviation of your input array")

// function to get standard deviation using the reduce javascript method, Math.sqrt
// while mapping through the array 

function getStandardDeviation(arrayInput) {
    let len = arrayInput.length // specifies the size of the array which would serve as len
    
    let mean = arrayInput.reduce((i, j) => i + j) / len

    let StandardDeviation = Math.sqrt(arrayInput.map(x => 
        Math.pow(x - mean, 2)).reduce((i, j) => i + j) / len)

    return document.write(StandardDeviation)
}

// standard deviation function call

getStandardDeviation(inputArray)
