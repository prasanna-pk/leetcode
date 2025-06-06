

const checkIfInstanceOf1 = (obj, classFunction) => {
    while(obj != null){
        obj = Object.getPrototypeOf(obj);
        if(obj === classFunction?.prototype) {
            return true;
        }
    }  
    return false;
}

const checkIfInstanceOf2 = (obj, classFunction) => {
    if(obj == null) return false;
    if(obj.constructor === classFunction) return true;
    obj = Object.getPrototypeOf(obj);      
    return checkIfInstanceOf2(obj, classFunction);
}

console.log(checkIfInstanceOf1(new String(), Date)) 
console.log(checkIfInstanceOf2(new String(), Number))   