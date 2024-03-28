const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str1 = str.slice(0,3);
console.log(str1);
let str2 = str.slice(4);
let finalstr = str2 + str1;
console.log(finalstr);
console.log(str.length);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The first phrase is ${str} and the final phrase is ${finalstr}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userresponse = input.question("How many letters do you think are relocated?");
if (userresponse > str.length){
    console.log("That's too many characters.");
}else {
    str = true

}
if (userresponse > 3){
    console.log("You moved too many characters.")
} else if (userresponse === 3){
    console.log("That's correct!");  
} else {
    console.log("That's not enough characters.");
}
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
