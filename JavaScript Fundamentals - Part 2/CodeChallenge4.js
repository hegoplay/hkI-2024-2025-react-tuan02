const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];

let totals = [];

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  };

tips = bills.map((bill) => calcTip(bill));

total = bills.map((bill, index) => bill + tips[index]);

console.log(bills, tips, total);

const calcAverage = (arr) => arr.reduce((acc, score) => acc + score, 0) / arr.length;

console.log(calcAverage(total));