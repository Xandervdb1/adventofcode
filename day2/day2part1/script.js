let dataString = document.getElementById("dataString").textContent;

let dataArray = dataString.split("\n");
let movementArray = [];
let x = 0;
let y = 0;

for(let i = 0; i < dataArray.length; i++){
    let instance = dataArray[i].split(" ");
    movementArray.push(instance);
}

for(let i = 0; i < movementArray.length; i++){
    if(movementArray[i].includes("forward")){
        let instance = movementArray[i].map(Number);
        x += instance[1];
    } else if(movementArray[i].includes("down")){
        let instance = movementArray[i].map(Number);
        y += instance[1];
    } else if(movementArray[i].includes("up")){
        let instance = movementArray[i].map(Number);
        y -= instance[1];
    }
}

console.log("horizontal pos: " + x + " vertical pos: " + y);
console.log("solution: " + (x*y))