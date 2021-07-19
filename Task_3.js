//          TASK 3
// Write a function that accepts an array of positive integers
// and returns an array of all prime numbers from the given array.
// A prime number is a number that is only divisible by 1 and itself.


//          SOLUTION
// from the question, it should be noted that the number of items
// received in the array was not specified, so therefore, it becomes paramount 
// to include a small section in our code where we ask the user to include the length of their
// array to check for their prime numbers.

// the first step is to declare the array as function checkPrimes()

function checkPrimes() {

    // from the note above, we define ArrayItemList to store the number of items to be stored in the array
    // i.e array size
    let ArrayItemsList = prompt('please specify the number of items you want to store in your array?')
    alert('click ok to check the prime number of ' + ArrayItemsList + " array items")
    
    // the second part of our solution include defining the numbers to be stored into the array as NumberStore
    let NumberStore = []

    // since the user will provide as with the array size, we then quickly run a for loop that
    // will accept user input based on the size provided
    // i.e a user will keep on receiving a prompt to include numbers based on his/her predetermined size
    for (let i = 0; i < ArrayItemsList; i++){
        // after the iterations, i added the numbers to the NumberStore array defined above
        // by using the javaScript .push() method
        NumberStore.push(Number(prompt(" Enter the list of "+ ArrayItemsList + " numbers to get an array of prime numbers : " + (i + 1), )))       
    }


    // after the storing the array inside the NumberStore array, it is then checked by using another javaScript method
    // .filter()
    // the filter method works in such a beautiful way as iterating through any variable(in this case, an array)
    // and return back the values that meet our set conditions
    // it should be noted, that i stored the NumberStore array in a new variable called the primeNumberStore
    let primeNumberStore = NumberStore.filter((number) => {

        // we quickly run the conditions to check for the prime number in our array
        // by iterating through using a for loop and a javaScript Math.sqrt() method

        for (let i = 2; i <= Math.sqrt(number); i++){

            if (number % i ===0) return false

            }
            return number > 1
        
    
    })

    // once the conditions have been met, the document.write() is used to print the answer on our web browser
    document.write("the prime numbers from the array are: " + "[" + primeNumberStore +"]")
    
}

// function Call
checkPrimes()
