function sameFrequency(num1, num2){
  
  const freqCounter1 = {}
  for(const i of String(num1)){
      freqCounter1[i] = (freqCounter1[i] || 0) + 1;
  }
  
  const freqCounter2 = {}
  for(const i of String(num2)){
      freqCounter2[i] = (freqCounter2[i] || 0) + 1;
  }
  
  for(const i in freqCounter1) {
      if(!freqCounter2[i] || (freqCounter1[i] != freqCounter2[i])){
          return false
      }
  }
  
  return true;
}

console.log(sameFrequency(123,231));