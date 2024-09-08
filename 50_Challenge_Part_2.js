// 1. Print numbers from 1 to 10
const quest1 = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};
// 2. Print the odd numbers less than 100
const quest2 = () => {
  for (let i = 1; i < 100; i += 2) {
    console.log(i);
  }
};
// 3. Print the multiplication table with 7
const quest3 = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
  }
};
// 4. Print all the multiplication tables with numbers from 1 to 10
const quest4 = () => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
};
// 5. Calculate the sum of numbers from 1 to 10
const quest5 = () => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} + ${j} = ${i + j}`);
    }
  }
};
// 6. Calculate 10!
const quest6 = () => {
  let result = 1;
  for (let i = 1; i <= 10; i++) {
    result *= i;
  }
  console.log(result);
};
// 7. Calculate the sum of even numbers greater than 10 and less than 30
const quest7 = () => {
  let sum = 0;
  for (let i = 11; i < 30; i += 2) {
    sum += i;
  }
  console.log(sum);
};
// 8. Create a function that will convert from Celsius to Fahrenheit
const quest8 = (celsius) => {
  return celsius * 1.8 + 32;
};
// 9. Create a function that will convert from Fahrenheit to Celsius
const quest9 = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
// 10. Calculate the sum of numbers in an array of numbers
const quest10 = (arr) => {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return sum;
};
// 11. Calculate the average of the numbers in an array of numbers
const quest11 = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum *= i;

    sum += arr[i];
    sum *= i + 1;
  }
  return sum;
};
// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
const quest12 = (arr) => {
  return arr.filter((num) => num > 0);
};
// 13. Find the maximum number in an array of numbers
const quest13 = (arr) => {
  return Math.max(...arr);
};
// 14. Print the first 10 Fibonacci numbers without recursion

const quest14 = () => {
  let fib = [0, 1];
  for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  for (let i = 0; i < 10; i++) {
    console.log(fib[i]);
  }
};
// 15. Create a function that will find the nth Fibonacci number using recursion
const quest15 = (n) => {
  if (n == 0) {
    return { first: 0, second: 1 };
  }
  let p = quest15(n >> 1);
  let c = p.first * (p.second * 2 - p.first);
  let d = p.first * p.first + p.second * p.second;
  if (n % 2 === 0) {
    return { first: c, second: d };
  } else {
    return { first: d, second: c + d };
  }
};

// console.log(quest15(10).first);
// 16. Create a function that will return a Boolean specifying if a number is prime
const quest16 = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// 17. Calculate the sum of digits of a positive integer number
const quest17 = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};

// 18. Print the first 100 prime numbers
const quest18 = (n = 100) => {
  let count = 0;
  let primes = [];
  let check = [];
  for (let i = 2; count < n; i++) {
    if (!check[i]) {
      primes.push(i);
      count++;
      for (let j = 2; j <= 1e6; j++) {
        if (i * j > 1e6) {
          break;
        }
        check[i * j] = true;
      }
    }
  }
  //   primes.forEach((prime) => console.log(prime));
  return primes;
};
// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”
const quest19 = (n, p) => {
  primes = quest18();
  let result = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i] > n) {
      result.push(primes[i]);
      if (result.length === p) {
        break;
      }
    }
  }
  return result;
};
// console.log(quest19(100, 10));
// 20. Rotate an array to the left 1 position
const quest20 = (arr) => {
  let first = arr.shift();
  arr.push(first);
  return arr;
};
// 21. Rotate an array to the right 1 position
const quest21 = (arr) => {
  let last = arr.pop();
  arr.unshift(last);
  return arr;
};
// 22. Reverse an array
const quest22 = (arr) => {
  return arr.reverse();
};
// 23. Reverse a string
const quest23 = (str) => {
  return str.split("").reverse().join("");
};
// 24. Create a function that will merge two arrays and return the result as a new array
const quest24 = (arr1, arr2) => {
  return [...arr1, ...arr2];
};
// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
const quest25 = (arr1, arr2) => {
  return [
    ...arr1.filter((num) => !arr2.includes(num)),
    ...arr2.filter((num) => !arr1.includes(num)),
  ];
};
// console.log(quest25([1,2,3],[2,3,4]));
// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
const quest26 = (arr1, arr2) => {
  return arr1.filter((num) => !arr2.includes(num));
};
// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
const quest27 = (arr) => {
  // convert array to set to remove duplicates
  let set = new Set(arr);
  // convert set back to array
  let newArr = Array.from(set);
  return newArr;
};
// 28. Calculate the sum of first 100 prime numbers and return them in an array
const quest28 = (n = 100) => {
  primes = quest18(n);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += primes[i];
  }
  return sum;
};
// 29. Print the distance between the first 100 prime numbers
const quest29 = (n = 100) => {
  primes = quest18(n);
  for (let i = 1; i < n; i++) {
    console.log(primes[i] - primes[i - 1]);
  }
};
// 30. Create a function that will add two positive numbers of indefinite size. The numbers
// are received as strings and the result should be also provided as string.
const quest30 = (a, b) => {
  return (BigInt(a) + BigInt(b)).toString();
};
// 31. Create a function that will return the number of words in a text
const quest31 = (str) => {
  return str.split(" ").length;
};
// 32. Create a function that will capitalize the first letter of each word in a text
const quest32 = (str) => {
  strArray = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return strArray.join(" ");
};
// console.log(quest32("hello world"));
// 33. Calculate the sum of numbers received in a comma delimited string
const quest33 = (str) => {
  return str.split(",").reduce((acc, num) => acc + parseInt(num), 0);
};
// 34. Create a function that returns an array with words inside a text.
const quest34 = (str) => {
  return str.split(" ");
};
// 35. Create a function to convert a CSV text to a “bi-dimensional” array
const quest35 = (str) => {
  return str.split("\n").map((line) => line.split(","));
};
// 36. Create a function that converts a string to an array of characters
const quest36 = (str) => {
  return str.split("");
};
// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
const quest37 = (str) => {
  return str.split("").map((char) => char.charCodeAt(0));
};
// 38. Create a function that will convert an array containing ASCII codes in a string
const quest38 = (arr) => {
  return arr.map((code) => String.fromCharCode(code)).join("");
};
// 39. Implement the Caesar cypher
const quest39 = (str, shift) => {
  return str
    .split("")
    .map((char) => {
      let code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        code = ((code - 65 + shift) % 26) + 65;
      } else if (code >= 97 && code <= 122) {
        code = ((code - 97 + shift) % 26) + 97;
      }
      return String.fromCharCode(code);
    })
    .join("");
};

// 40. Implement the bubble sort algorithm for an array of numbers
const quest40 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = temp;
        arr[j] = arr[j] ^ arr[j + 1];
        arr[j + 1] = arr[j] ^ arr[j + 1];
        arr[j] = arr[j] ^ arr[j + 1];
      }
    }
  }
  return arr;
};
// 41. Create a function to calculate the distance between two points defined by their x, y
// coordinates
const quest41 = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// 42. Create a function that will return a Boolean value indicating if two circles
// defined by center coordinates and radius are intersecting

const quest42 = (x1, y1, r1, x2, y2, r2) => {
    const sw = (a, b) => {
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
    }
    if (r2 > r1){
        sw(r1, r2);
        sw(x1, x2);
        sw(y1, y2);
    }
    let dis = Math.sqrt((x1-x2)**2 + (y2-y1)**2)
    if(dis < r1){
        return dis + r2 > r1;
    }
    return r1 + r2 > dis;

};

// 43. Create a function that will receive a bi-dimensional array as argument and a
// number and will extract as a unidimensional array the column specified by the
// number
const quest43 = (arr, n) => {
    if (n < 0 || n >= arr[0].length) {
        return [];
    }
    return arr.map(row => row[n]);
}
// 44. Create a function that will convert a string containing a binary number into a
// number
const quest44 = (str) => {
    return parseInt(str, 2);
}

// 45. Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
// levels)
const quest45 = (...args) => {
    let sum = 0;
    args.forEach(arg => {
        if (Array.isArray(arg)) {
            sum += quest45(...arg);
        } else {
            sum += arg;
        }
    });
    return sum;
}
// console.log(quest45(1, [2, 3, [4, 5, [6, 7]]]));
// 46. Find the maximum number in a jagged array of numbers or array of numbers
const quest46 = (...args) => {
    let mx = -Infinity;
    args.forEach(arg => {
        if (Array.isArray(arg)) {
            mx = max(mx,quest46(...arg));
        } else {
            mx = max(mx,arg)
        }
    });
    return mx;
}
// 47. Deep copy a jagged array with numbers or other arrays in a new array
  const quest47 = (...args) => {
      let result = [];
      args.forEach(arg => {
          if (Array.isArray(arg)) {
              result = [...result, ...quest47(...arg)];
          } else {
              result= [...result, arg];
          }
      });
      return result;
  }
  console.log(quest47(1, [2, 3, [4, 5, [6, 7]]]));
// 48. Create a function to return the longest word in a string
// 49. Shuffle an array of strings
// 50. Create a function that will receive n as argument and return an array of n
// random numbers from 1 to n. The numbers should be unique inside the array.
// 51. Find the frequency of letters inside a string. Return the result as an array of
// arrays. Each subarray has 2 elements: letter and number of occurrences.
// 52. Calculate Fibonacci(500) with high precision (all digits)
// 53. Calculate 70! with high precision (all digits)
