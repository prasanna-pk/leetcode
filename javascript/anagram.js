
//Solution 1
function validAnagram(string1, string2) {
    // add whatever parameters you deem necessary - good luck!

    const freqCounter1 = {}
    for (const val of string1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    const freqCounter2 = {}
    for (const val of string2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    // console.log(JSON.stringify(freqCounter1), JSON.stringify(freqCounter2))

    for (const val in freqCounter1) {
        if (!(val in freqCounter2)) {
            return false;
        }
        if (freqCounter2[val] !== freqCounter1[val]) {
            return false;
        }
    }

    return true;
}

console.log(validAnagram("abc", "bca"))


//Solution 2
function validAnagram2(string1, string2) {
    if (string1.length !== string2.length) return false;

    const lookup = {};
    for (const val of string1) {
        const value = lookup[val];
        value ? lookup[val] = value + 1 : lookup[val] = 1
    }

    for (const val of string2) {
        if (!lookup[val]) {
            return false;
        } else {
            lookup[val] -= 1;
        }
    }

    return true;
}

console.log(validAnagram2("abca", "bcaa"))