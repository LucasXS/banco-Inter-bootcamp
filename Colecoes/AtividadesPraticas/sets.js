const MY_ARRAY = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValue(array) { 
    const MY_SET = new Set(array);

    //Argumento hashing 
    return [...MY_SET];
    
    // Assim volta um SET
    //return [MY_SET];
}

console.log(uniqueValue(MY_ARRAY));