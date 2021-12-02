let numberString = document.getElementById("numberList").textContent;

let numberArray = numberString.split("\n").map(Number);

let increased = 0;

for(let i = 0; i < numberArray.length; i++){
    if(numberArray[i - 1] in window){
        console.log(numberArray[i] + ": no previous data");
    } else {
        if(numberArray[i] > numberArray[i-1]){
            increased ++;
            console.log(numberArray[i] + ": increased");
        } else {
            console.log(numberArray[i] + ": decreased");
        }
    }
}
console.log(increased);