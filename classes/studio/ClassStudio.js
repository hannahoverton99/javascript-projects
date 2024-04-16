//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
    }
    average(){
        let sum = 0;
         for(let i of this.scores){
            sum += i
         }return Math.round(sum/this.scores.length *10)/10;   
    }
    status(){
        let avg= this.average();
        let status;
        if (avg > 90){
            status = "Accepted";
        }else if(avg > 80 && avg < 90){
            status = "Reserve";
        }else if(avg > 70 && avg < 79){
            status = "Probationary";
        }else{
            status = "Rejected";
        }
return `${this.name} earned an average test score of ${avg}% and has a status of ${status}.`
    }
}
let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);

let dog = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);

let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
console.log(bear.scores);
bear.addScore(83);
console.log("Added Bubba's new score:");
console.log(bear.scores);

console.log(`Merry's average score is ${dog.average()}!`);

console.log(bear.status());
console.log(dog.status());
console.log(gator.status());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
gator.addScore(95);
gator.addScore(97);
gator.addScore(98);
gator.addScore(99);
gator.addScore(99);
gator.addScore(98);
gator.addScore(99);
gator.addScore(99);
console.log(gator.status());