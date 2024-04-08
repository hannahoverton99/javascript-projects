let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let chimpanzeeTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
}

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"]= Math.random() * 10;
salamander["astronautID"]= Math.random() *10;
chimpanzeeTwo["astronautID"] = Math.random() *10;
beagle["astronautID"] = Math.random() *10;
tardigrade["astronautID"] = Math.random() *10;

superChimpOne["move"] = Math.random() *10;
salamander["move"] = Math.random() *10;
chimpanzeeTwo["move"] = Math.random() *10;
beagle["move"] = Math.random() * 10;
tardigrade["move"] = Math.random() * 10;


// Create an array to hold the animal objects.

let candidates = [superChimpOne, salamander, chimpanzeeTwo, beagle, tardigrade];
// Print out the relevant information about each animal.
function fitnessTest(candidates) {
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
      numSteps = 0;
      turns = 0;
      while(numSteps < 20){
       numSteps += candidates[i];
       turns++;
      }
      results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
   
   }console.log(fitnessTest(candidates));


// Start an animal race!