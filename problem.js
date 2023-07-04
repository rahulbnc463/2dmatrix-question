const findTarget = (arr, target) => {
  const pairs = [];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      pairs.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return pairs;
};

const mergeArrayDoubleT = (arr, target) => {
  const mergedArray = arr.flat().sort((a, b) => a - b);
  const doubledTarget = target * 2;
  const result = [];

  for (let i = 0; i < mergedArray.length - 1; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
      const currentSum = mergedArray[i] + mergedArray[j];
      if (currentSum === doubledTarget) {
        result.push([mergedArray[i], mergedArray[j]]);
      }
    }
  }

  return result;
};

const arr = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;

const targetPairs = findTarget(arr, target);
console.log('First Combination for "4":', targetPairs);

const mergedArray = arr.sort((a, b) => a - b);
console.log("Merge Into a Single Array:", mergedArray);

const doubleTargets = mergeArrayDoubleT(mergedArray, target);
console.log('Second Combination for "8":', doubleTargets);
