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

console.log(twoSum([2, 7, 11, 15], 9));
