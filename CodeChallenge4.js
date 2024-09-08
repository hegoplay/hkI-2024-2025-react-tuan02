const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [275, 40, 430];

const tips = bills.map((bill) => calcTip(bill));

const total = bills.map((bill, index) => bill + tips[index]);

total.forEach((value, index) => {
  console.log(
    `The bill was ${bills[index]}, the tip was ${tips[index]}, and the total value ${value}`
  );
});
