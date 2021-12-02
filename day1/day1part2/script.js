let numberString = document.getElementById("numberList").textContent;

let numberArray = numberString.split("\n").map(Number);
let prunedArray = [];

let increased = 0;

pruneArray();
checkArray();
console.log(numberArray);
console.log(prunedArray);

function pruneArray(){
    for(let i = 2; i < numberArray.length; i++){
        let sum;
        sum = numberArray[i-2] + numberArray[i-1] + numberArray[i];
        prunedArray.push(sum);
    }
}

function checkArray(){
    for(let i = 0; i < prunedArray.length; i++){
        if(prunedArray[i - 1] in window){
            console.log(prunedArray[i] + ": no previous data");
        } else {
            if(prunedArray[i] > prunedArray[i-1]){
                increased ++;
                console.log(prunedArray[i] + ": increased");
            } else if(prunedArray[i] == prunedArray[i-1]){
                console.log(prunedArray[i] + ": no change")
            } else {
                console.log(prunedArray[i] + ": decreased");
            }
        }
    }
    console.log(increased);
}