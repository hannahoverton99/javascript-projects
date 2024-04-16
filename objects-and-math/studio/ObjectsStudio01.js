// Code your selectRandomEntry function here:

function selectRandomEntry(idNumbers){
  let index = Math.floor(idNumbers.length * Math.random());
  return idNumbers[index]
}

// Code your buildCrewArray function here:


let idNumbers = [291, 414, 503, 599, 796, 890];



let crew=[];

function buildCrewArray(luckyNums, animals){
    for(i=0; i < animals.length; i++){
      if (luckyNums.includes(animals[i].astronautID)){
        crew.push(animals[i]);

      }
    }

  }
  

    


  


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let luckyNums= [];
while (luckyNums.length <3){
  let randomCand = selectRandomEntry(idNumbers);
  if (!luckyNums.includes(randomCand)){
    luckyNums.push(randomCand);
  }
}
console.log(luckyNums);


// Code your template literal and console.log statements:
// function 
buildCrewArray(luckyNums, animals);
console.log(crew);
console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are all going to space!`)