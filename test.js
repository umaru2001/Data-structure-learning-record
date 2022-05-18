console.log('hello, world!');

function quickSort(nums) {
  if (nums.length === 0) return [];
  let pivot = nums[0];
  let left = [], right = [];
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];
    if (element > pivot) right.push(element);
    else left.push(element);
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort([10, 3, 4, 2, 7, 5]));
