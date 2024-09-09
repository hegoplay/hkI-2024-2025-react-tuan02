const calcAverage = (scores) => scores.reduce((acc, score) => acc + score, 0) / scores.length;

let dolphinsAverage = calcAverage([85, 54, 41]);
let koalasAverage = calcAverage([23, 34, 27]);

const checkWinner = (dolphinsAverage, koalasAverage) => {
    if (dolphinsAverage >= 2 * koalasAverage) {
        console.log(`Dolphins win (${dolphinsAverage} vs. ${koalasAverage})`);
    } else if (koalasAverage >= 2 * dolphinsAverage) {
        console.log(`Koalas win (${koalasAverage} vs. ${dolphinsAverage})`);
    } else {
        console.log("No one wins");
    }
}

checkWinner(dolphinsAverage, koalasAverage);