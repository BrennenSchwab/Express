/** @param {Array} arr */

function numberFrequency(arr) {
    return arr.reduce((acc, next) => {
            acc[next] = (acc[next] || 0) + 1;
            return acc;
        }, {});
  }


/** 
 * @param {Array} arrayToNums
 * @returns {Array|Error} 
 */

function arrayToIntAndErrorHandle(arrayToNums) {
  let result = [];

  for (let i = 0; i < arrayToNums.length; i++) {
    let valToNum = Number(arrayToNums[i]);

    if (Number.isNaN(valToNum)) {
      return new Error(
        `The entry '${arrayToNums[i]}' is not a valid number.`
      );
    }

    result.push(valToNum);
  }
  return result;
}

/** @param {Array} arr */

function findMode(arr) {
    let frequency = numberFrequency(arr);
  
    let count = 0;
    let mostFreqNum;
  
    for (let key in frequency) {
      if (frequency[key] > count) {
        mostFreqNum = key;
        count = frequency[key];
      }
    }
    return +mostFreqNum;
  }

function findMean(nums){
  if(nums.length === 0) return 0;
  return nums.reduce((acc, cur) => acc + cur) / nums.length
}

function findMedian(nums){

  nums.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    median = nums[middleIndex];
  }
  return median
}



module.exports = {
  numberFrequency,
  findMean,
  findMedian,
  findMode,
  arrayToIntAndErrorHandle
};