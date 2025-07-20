//function that counts unique numbers in an sorted array

const input = [-2, -1, -1, 0, 1];

//Solution 1:
function countUniqueValues(input) {
    const lookup = {};
    for(const val of input){
        lookup[val] = (lookup[val] || 0) + 1
    }

    return Object.keys(lookup).length;
}

console.log(countUniqueValues(input))

//Solution 2: