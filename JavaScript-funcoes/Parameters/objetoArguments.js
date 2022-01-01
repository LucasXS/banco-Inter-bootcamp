//
// OBJETO "ARGUMENTS" //
//

function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i]> max){
        max = arguments[i];
        }
    }
    return max;
}

//console.log(findMax(1, 2,103,6,90,1));