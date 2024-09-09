const calcBMI = (mass, height) => mass/(height*height);

markBMI = calcBMI(78, 1.69);
johnBMI = calcBMI(92, 1.95);

let markHigherBMI =  markBMI > johnBMI;
// let markHigherBMI =  calcBMI(95, 1.88) > calcBMI(85, 1.76);

console.log(markHigherBMI ? "Mark's BMI is higher than John's" : "John's BMI is higher than Mark's");
console.log(markHigherBMI ? `Mark's BMI${markBMI} is higher than John's` : `John's BMI${johnBMI} is higher than Mark's`);

