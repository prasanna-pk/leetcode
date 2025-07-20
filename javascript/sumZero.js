//Function that takes sorted array as input and find the first pair of numbers that sums to zero

const input = [-3, -2, -1, 0, 1, 2, 3];

//Solution 1: Fail
/*This solution is incorrect because it may return the same element twice (e.g., val and val2 being the same element) and doesn't avoid duplicate checks or ensure val and val2 are at different indices.
For example, if val is 0, val2 could also be 0, and it would incorrectly return [0, 0] as a valid pair.
Also, it's not optimized for a sorted array. */
function sumZero1(input) {
    for (const val of input) {
        for (const val2 of input) {
            if (val + val2 === 0) {
                return [val, val2];
            }
        }
    }
}

console.log(sumZero1(input));


//Solution 2:
function sumZero2(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] + input[j] === 0) {
                return [input[i], input[j]]
            }
        }
    }
}

console.log(sumZero2(input));

//Solution 3:
function sumZero3(input) {
    let left = 0;
    let right = input.length - 1;

    while (left < right) {
        const sum = input[left] + input[right];
        if (sum === 0) {
            return [input[left], input[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero3(input));

