// TASK 5

// Write a method to replace all spaces in a string with '%20'.
// Example
// Input: "Mr John Smith " 
// Output: "Mr%20John%20Smith"


//      SOLUTION

// prompt user to enter the strings they intend to change
let inputString = prompt("Enter your string here")

// using javaScript global and ignore with replace() method to replace 
// the spaces with "%20" and stored in "inputStringReplace" defined variable
let inputStringReplace = inputString.replace(/\s/g, "%20")
// \s is a meta character expression which matches any whitespace character, spaces and tabs


// sends the output to using the alert function
alert(inputStringReplace)


