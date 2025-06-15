const numbersList = [1, 3, 2, 5, 8, 7];

let min, temp;
for (let numIndex = 0; numIndex < numbersList.length; numIndex++) {
    min = numIndex;
    for (let j = numIndex + 1; j < numbersList.length; j++) {
        if (numbersList[j] < numbersList[min]) {
            min = j;
        }
    }
    temp = numbersList[numIndex];
    numbersList[numIndex] = numbersList[min];
    numbersList[min] = temp;
}

console.log(numbersList);