var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementById("subtrair").addEventListener("click", decrement);
document.getElementById("adicionar").addEventListener("click", increment);

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

while (currentNumber <= 10){
    var total = count.in
}