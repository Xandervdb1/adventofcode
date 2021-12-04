let dataString = document.getElementById("dataString").textContent;

let dataArray = dataString.split("\n");
let bit;
let gamma = '';
let epsilon = '';
console.log(dataArray);

calcGamma();
calcEpsilon();
convertBinaryNum();

function calcGamma(){
    bit = 0;
    for(let i = 0; i < 12; i++){
        let ones = 0;
        let zeros = 0;
        for(let i = 0; i < dataArray.length; i++){
            let twelvebit = dataArray[i];
            let singlechar = twelvebit.charAt(bit);
            if(singlechar == 1){
                ones ++;
            } else {
                zeros ++;
            }
        }
    
        if(ones > zeros){
            gamma = gamma + "1";
        } else {
            gamma = gamma + "0";
        }
        bit ++;
    }
    
    console.log(gamma);
}


function calcEpsilon(){
    bit = 0;
    for(let i = 0; i < 12; i++){
        let ones = 0;
        let zeros = 0;
        for(let i = 0; i < dataArray.length; i++){
            let twelvebit = dataArray[i];
            let singlechar = twelvebit.charAt(bit);
            if(singlechar == 1){
                ones ++;
            } else {
                zeros ++;
            }
        }
    
        if(ones < zeros){
            epsilon = epsilon + "1";
        } else {
            epsilon = epsilon + "0";
        }
        bit ++;
    }
    
    console.log(epsilon);      
}

function convertBinaryNum(){
    gammaSol = parseInt(gamma, 2);
    epsilonSol = parseInt(epsilon, 2);
    
    console.log(gammaSol);
    console.log(epsilonSol);
    console.log(gammaSol*epsilonSol); 
}