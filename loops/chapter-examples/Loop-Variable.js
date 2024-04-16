// Experiment with this loop by modifying each of the following: the variable initialization, the boolean condition, and the update expression.

let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
  console.log(phrase[i]);
}

let str = "caleb";
let reversed = "";
for (let i = 0; i < str.length; i ++) {
  reversed = str[i] + reversed;
}
console.log(reversed);