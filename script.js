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

// console.log(isPalindrome("Madam"));
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return [...duplicates];
}

// console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));

// Input: [10, 5, 20, 8, 20]
// Output: 10
function secondLargest(arr) {
  const unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargest([10, 5, 20, 8, 20]));

// loop
function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }

  return second;
}

// console.log(secondLargest([10, 5, 20, 8, 20]

// event

function evenSum(limit) {
  let sum = 0;

  for (let i = 2; i <= limit; i += 2) {
    console.log(i);
    sum += i;
  }

  return sum;
}

const result = evenSum(50);
// console.log("Final Sum:", result);
const numbers1 = [10, 5, 8, 20, 15];

let largest = numbers1[0];
let secondLargest1 = -Infinity;

for (let i = 1; i < numbers.length; i++) {
  if (numbers1[i] > largest) {
    secondLargest1 = largest;
    largest = numbers1[i];
  } else if (numbers1[i] > secondLargest && numbers1[i] !== largest) {
    secondLargest1 = numbers1[i];
  }
}

// console.log(secondLargest1);

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
const nums = [1, 2, 3, 4];
const totalProduct = nums.reduce((acc, currentValue) => acc * currentValue, 1);
const output = nums.map((num) => totalProduct / num);
console.log(output);
const a = [1, 2];
const b = [3, 4];

const merged = [...a, ...b];

console.log(merged); // [1,2,3,4]
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true