//      TASK 10

// Write a function that takes a string. 
// The function should calculate the character in the string with the most occurrences
// and return that character and the total occurrence of the character in a map or JSON object.
// If more than one character has the most occurrence, return those characters and
// total occurrences of each as an array of maps or JSON objects.

// Example
// Input: “afhuusnimr443o0sggg”
// Output: “g”

// SOLUTION

    // request user to input string
    let stringItemsList = prompt('please enter your string here to check for most occurences')
    alert('click ok to see the letter with the most occurence and the total number  of times this letter appear')
    


    // after the user info is displayed to collect string
    // function highestOccuringletter is written below

    function highestOccuringLetter(str) { // this function receives a string 
        // defining an empty object string lateral
        let object = {}
        
        // using a for loop to check for the highest occuring string character
        for (let index = 0; index < str.length; index++) {
            let characters = str.charAt(index) //checking the characters in each index and assigning them to characters variable
            if (object[characters]) {
                object[characters] ++
            } else {
                object[characters] = 1
            }  
        }
        // next point is displaying the object literal on the console
        console.log(object);

        // it should be noted that objects have been displayed on the console
        // the next step is to filter this max letter out

        let maxLetter = 0 //we assign max letter to 0 
        num = '' // assign the number of occurence to an empty string also

        for (l in object) {
            if (object[l] > maxLetter) {
                maxLetter = object[l]
                num = l
            }
        }

            // displaying result to console
        console.log('Most characters:' + num);
        console.log('Number of occurrences:' + maxLetter);
    }
    

    highestOccuringLetter(stringItemsList)