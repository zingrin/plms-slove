// nums = [2, 7, 11, 15]
// target = 9

function twoSum(nums, target) {
  const map = {};
  for (let index = 0; index < nums.length; index++) {
    const element = target - nums[index];

    if (map[element] !== undefined) {
      return [map[element], index];
    }
    map[nums[index]] = index;
  }
}
// console.log(twoSum([2, 7, 11, 15], 9));

// numbers= [88,88,39,90,877,38];
// target = 126;

function sumT(numbers, t) {
  const map = {};
  for (let index = 0; index < numbers.length; index++) {
    const element = t - numbers[index];

    if (map[element] !== undefined) {
      return [map[element], index];
    }
    map[numbers[index]] = index;
  }
}
console.log(sumT([88, 88, 39, 877, 38], 126));
// const nums1 = [10, 5, 8, 20, 15];
// const target1 = 25;

function tSum(nums1, tr) {
  const map = {};
  for (let index = 0; index < nums1.length; index++) {
    const element = tr - nums1[index];
    if (map[element] !== undefined) {
      return [map[element], index];
    }

    map[nums1[index]] = index;
  }
}
// console.log(tSum([10, 5, 8, 20, 15], 25));

// const nums2 = [77,99,88,67,30,53];

// const target1 = 120;

function sumT3(nums2, target2) {
  const map = {};
  for (let index = 0; index < nums2.length; index++) {
    const element = target2 - nums2[index];
    if (map[element] !== undefined) {
      return [map[element], index];
    }
    map[nums2[index]] = index;
  }
}

// console.log(sumT3([77, 99, 88, 67, 30, 53], 120));

// solting
function twoSum4(nums4, target4) {
  let arr = nums4.map((num, i) => [num, i]); // value + index store
  arr.sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left][0] + arr[right][0];

    if (sum === target4) {
      return [arr[left][1], arr[right][1]];
    } else if (sum < target4) {
      left++;
    } else {
      right--;
    }
  }
}

// console.log(twoSum4([2, 7, 11, 15], 9));

function reverseArray(arr) {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

// console.log(reverseArray([1, 2, 3, 4]));
function firstUniqueChar(str) {
  const map = {};

  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let char of str) {
    if (map[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstUniqueChar("programming"));
