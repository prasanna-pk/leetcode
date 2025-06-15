const numbersList = [1, 2, 3, 4, 5, 7, 8];

function binarySearch(list, searchNum) {
    let left = 0;
    let right = list.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        const midValue = list[middle];
        if (midValue < searchNum) {
            left = middle + 1
        } else if (midValue === searchNum) {
            return middle;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}

console.log(binarySearch(numbersList, 8));
