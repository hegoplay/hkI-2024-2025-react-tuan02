const printForecast = (arr) =>{
    let str = '';
    arr.forEach((temp, index) => str += `${temp}°C in ${index + 1} days...`);
    console.log('...' + str);
}

printForecast([17, 21, 23]);