//This function should return true if all elements in 1st array is having its squared values in the 2nd array

const input1 = [1, 2, 3];
const input2 = [1, 4, 9];

//Solution 1
function arrayMatching(array1, array2) {
    if (array1.length !== array2.length) return false;
    let result = true;
    for (const element1 of array1) {
        const squaredValue = element1 * element1;
        if (!array2.includes(squaredValue)) {
            result = false;
            break;
        } else {
            const index = array2.indexOf(squaredValue);
            delete array2.splice(index, 1);
        }
        console.log(array2);
    }
    return result;
}

// console.log(arrayMatching(input1, input2));


//Solution 2
function arrayMatching2(array1, array2) {
    if (array1.length !== array2.length) return false;

    const freqCounter1 = {};
    for (const val of array1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    const freqCounter2 = {}
    for (const val of array2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }

    for (const val in freqCounter1) {
        if (!(val ** 2 in freqCounter2)) {
            return false;
        }
        if (freqCounter2[val ** 2] !== freqCounter1[val]) {
            return false;
        }
    }

    return true;
}

console.log(arrayMatching2(input1, input2));