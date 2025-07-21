//function that counts unique numbers in an sorted array

const input = [-2, -1, -1, 0, 1];

//Solution 1:
//time complexity - O(n)
//space complexity - O(n)
function countUniqueValues(input) {
    const lookup = {};
    for (const val of input) {
        lookup[val] = (lookup[val] || 0) + 1
    }

    return Object.keys(lookup).length;
}

// console.log(countUniqueValues(input))

//Solution 2:
//time complexity - O(n)
//space complexity - O(1)
function countUniqueValues2(input) {
    if (!input.length) return 0;
    let i = 0;
    let j = 1;

    while (j < input.length) {
        if (input[i] == input[j]) {
            j++;
        } else if (input[i] != input[j]) {
            i++;
            input[i] = input[j];
        }
    }

    return i + 1;
}

// console.log(countUniqueValues2([1, 1, 2, 2, 3]))


//Solution 3:
//time complexity - O(n)
//space complexity - O(1)
function countUniqueValues3(input) {
    let i = 0;
    for (let j = 1; j < input.length; j++) {
        if (input[j] != input[i]) {
            i++;
            input[i] = input[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues3([1, 1, 2, 2, 3, 4]))
