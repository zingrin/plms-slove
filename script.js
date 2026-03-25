// Prime number check

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
// console.log(isPrime(7, 3, 13));
// console.log(isPrime(10, 4, 60));

// remove duplicate from array
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers);

const num = [
  22, 27, 27, 88, 99, 66, 66, 55, 33, 33, 99, 22, 5, 7, 8, 9, 10, 17, 17, 15,
];
const uniqueNum = [...new Set(num)];
// console.log(uniqueNum);

const studentsName = [
  "jerin",
  "johnny",
  "milon",
  "johnny",
  "jerin",
  "mia",
  "mina",
  "rafi",
];

const doubleName = studentsName.filter((name, index, arr) => {
  return arr.indexOf(name) !== index;
});

// console.log(doubleName);

// Input: "javascript"
// Output: 3

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
// console.log(countVowels("javascript"));

// 2.Input: [1,2,3,4]
// Output: 10

function sumArr(arr) {
  return arr.reduce(
    (accumulater, currentValue) => accumulater + currentValue,
    0,
  );
}

function sumArry(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sumArry([1, 2, 3, 4]));

// input: madam
// output :true

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}

console.log(isPalindrome("Madam"));
