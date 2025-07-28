
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];

//Solution 1: using divide and conquer
//time complexity: O(log n)
//space complexity: O(1)
function search(inputArray, val) {

    let min = 0;
    let max = inputArray.length - 1;

    while (min < max) {
        let middle = Math.floor((min + max) / 2);
        const value = inputArray[middle];
        if (value === val) {
            return val;
        } else if (value < val) {
            min = middle + 1;
        } else if (value > val) {
            max = middle - 1;
        }
    }

    return -1;
}

console.log(search(inputArray, 7))