
//      TASK 1
// Write a function that takes an array of positive integers. The function should calculate the sum of all
// even and odd integers and return an array containing the sums.The first index in the returned array
// should hold the sum of the even integers and the second index should hold the sum of the odd integers.


// SOLUTION
// collect input from the user after determining the array size
// store this input in an array I define as "positiveIntegers"
// do a test to check for the even and odd integers amongst the array (positiveIntegers)
// i'd then go on to store the even and odd numbers in separate arrays, defined as 
// "evenNumberArrayStore" and "oddNumberArrayStore"
// after this step, do a sum of all the values in "evenNumberArrayStore" and "oddNumberArrayStore"
// store the sums in a new variable defined as "evenNumberArraySum" and "oddNumberArraySum"
// display the answer in an array defined as "results",
// which holds the "evenNumberArraySum" as first value while the "oddNumberArraySum" as the second value 

let positiveIntegers = []
let evenNumberArrayStore = []
let oddNumberArrayStore = []

let evenNumberArraySum = []
let oddNumberArraySum = []
let results = []
let evenSum = 0
let oddSum = 0

function arraySize() {
    
    let arraySize = prompt('please specify the number of items you want to store in your array?')
    alert('click ok to input ' + arraySize + ' numbers')

    let positiveIntegers = []

    for (let i = 0; i < arraySize; i++){
        // after the iterations, i added the numbers to the arraySize array defined above
        // by using the javaScript .push() method
        positiveIntegers.push(Number(prompt(" Enter the list of " + arraySize + " numbers to get your sums: number " + (i + 1), )))       
    }

    // after storing the input value into the "positiveIntegers" array, the next step is to check for
    // even and odd numbers by using the javaScript forEach method
    // even numbers are numbers Even numbers are those numbers
    // that can be divided into two equal groups or pairs and are exactly divisible by 2.
    // in other words An even number is a number that is a multiple of 2.
    
    // odd numbers are numbers that cannot be divided into two equal groups.

    // to loop through an array by using the forEach method,
    // you need a callback function (or anonymous function):
    // it should be noted that the function would be executed for every single element of the array
    // once the condition is met, the push() javascript method is 
    // used to add the even and odd  to their numbersArrayStore respectively
    positiveIntegers = positiveIntegers.forEach((element) => {
        if (element % 2 === 0) {
           return evenNumberArrayStore.push(element)
            
        } else {
           return oddNumberArrayStore.push(element)
        }

    })

    // the next step is to find their total sums and storing them
    // in evenNumberArraySum as well as oddNumberArraySum

    for (let i = 0; i < evenNumberArrayStore.length; i++){
        evenSum += evenNumberArrayStore[i]
    }

    for (let i = 0; i < oddNumberArrayStore.length; i++){
        oddSum += oddNumberArrayStore[i]
    }
    
    evenNumberArraySum.push(evenSum)
    oddNumberArraySum.push(oddSum)


    // finally we combine our arrays inside an result by using the javaScript
    // array concatenation method and alert it for the user

    results = evenNumberArraySum.concat(oddNumberArraySum)
    
    alert(" the result of array are ["+ results + "]") 
    document.write(" the result of array are ["+ results + " ]")

}


// function Call
  arraySize()




    // evenNumberArraySum = eval(evenNumberArrayStore.join("+"))
    // oddNumberArraySum = eval(oddNumberArrayStore.join("+"))