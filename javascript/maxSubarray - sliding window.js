//This program is to find max sum of n consecutive elements in array

//Solution 1:
// time complexity: O(n^2)
// space complexity: O(count)
function maxSubArray(inputArray, count) {
    let tempMax = -Infinity;
    let maxSumArray = [];
    for (let i = 0; i < inputArray.length - count + 1; i++) {
        let sum = 0;
        let tempMaxSumArray = [];
        for (let j = i; j < i + count; j++) {
            sum += inputArray[j];
            tempMaxSumArray.push(inputArray[j]);
        }
        if (sum > tempMax) {
            tempMax = sum;
            maxSumArray = tempMaxSumArray;
        }
    }
    return maxSumArray;
}

// console.log(maxSubArray([5, 5, 3, 4, 5], 2))

//Solution 2:
//time complexity: O(n)
//space complexity: O(1)
function maxSubArraySum2(inputArray, count) {
    let maxSum = 0;
    let tempSum = 0;

    for(let i=0; i< count; i++) {
        maxSum += inputArray[i];
    }

    tempSum = maxSum;
    for(let i=count; i < inputArray.length; i++){
        tempSum = tempSum + inputArray[i] - inputArray[i - count];
        if(tempSum > maxSum) {
            maxSum = tempSum;
        }
    }

    return maxSum;
}

console.log(maxSubArraySum2([5, 5, 3, 4, 5, 8], 2))