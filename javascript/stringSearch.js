
//Solution 1:
//Time complexity: O(n^2)
//Space complexity: O(1)
function searchString(inputString, search){
    let count = 0;
    for(let i = 0; i < inputString.length; i++){
        for (let j = 0; j < search.length; j++){
            if(inputString[i + j] != search[j]){
                break;
            } 
            if(j === search.length - 1) {
                count++;
            }
        }
    }
    return count;
}

console.log(searchString('hello hi hello', 'hello'))