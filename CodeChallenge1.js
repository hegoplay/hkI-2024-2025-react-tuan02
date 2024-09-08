const calcBMI = (mass, height) => mass/(height*height);

let markHigherBMI =  calcBMI(78, 1.69) > calcBMI(92, 1.95);
// let markHigherBMI =  calcBMI(95, 1.88) > calcBMI(85, 1.76);

console.log(markHigherBMI );


