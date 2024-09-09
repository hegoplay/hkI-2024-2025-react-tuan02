const calcBMI = (mass, height) => mass / height ** 2;

let markMiller = new Map([
  ["fullName", "Mark Miller"],
  ["mass", 78],
  ["height", 1.69],
  ["calcBMI", calcBMI(78, 1.69)]
]);

let johnSmith = new Map([
  ["fullName", "John Smith"],
  ["mass", 92],
  ["height", 1.95],
  ["calcBMI", calcBMI(92, 1.95)]
]);

const getHigherBMI = (markMiller, johnSmith) => {
    if(markMiller.get('calcBMI') > johnSmith.get('calcBMI')){
        console.log(`${markMiller.get('fullName')}'s BMI (${markMiller.get('calcBMI')}) is higher than ${johnSmith.get('fullName')}'s (${johnSmith.get('calcBMI')})`);
    } 
    else if(johnSmith.get('calcBMI') > markMiller.get('calcBMI')){
        console.log(`${johnSmith.get('fullName')}'s has a higher BMI (${johnSmith.get('calcBMI')}) than ${markMiller.get('fullName')} (${markMiller.get('calcBMI')})`);
    }
    else{
        console.log(`${markMiller.get('fullName')} and ${johnSmith.get('fullName')} have the same BMI (${markMiller.get('calcBMI')})`);
    }
}

getHigherBMI(markMiller, johnSmith);