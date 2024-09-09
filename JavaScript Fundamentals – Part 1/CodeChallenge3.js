let Dolphins = [96, 108, 89];
let Koalas = [88, 91, 110];

const calcAverage = (scores) =>
  scores.reduce((acc, score) => acc + score, 0) / scores.length;

let dolphinsAverage = calcAverage(Dolphins);
let koalasAverage = calcAverage(Koalas);

if (dolphinsAverage < 100 && koalasAverage < 100) {
  console.log("No team wins the trophy");
} else if (dolphinsAverage > koalasAverage) {
  console.log("Dolphins win the trophy");
} else if (koalasAverage > dolphinsAverage) {
  console.log("Koalas win the trophy");
} else {
  console.log("It's a draw");
}
