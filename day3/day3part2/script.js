let dataString = document.getElementById("dataString").textContent;

let dataArray = dataString.split("\n");
let bit;
let textlength = dataArray[0].length;
let oxyArray = dataArray;
let coArray = dataString.split("\n");

calcOxy();
calcCo();
let oxyBinary = oxyArray[0];
let coBinary = coArray[0];
let oxySol = converBinaryNum(oxyBinary);
let coSol = converBinaryNum(coBinary);
console.log(oxySol);
console.log(coSol);
console.log(oxySol * coSol);

function calcOxy(){
    bit = 0;
    for(let i = 0; i < textlength; i++){
        let ones = 0;
        let zeros = 0;
        for(let i = 0; i < oxyArray.length; i++){
            let twelvebit = oxyArray[i];
            let singlechar = twelvebit.charAt(bit);
            if(singlechar == "1"){
                ones ++;
            } else {
                zeros ++;
            }
        }
        if(zeros > ones){
            for(let i=oxyArray.length-1 ; i>=0;i--){
                let twelvebit = oxyArray[i];
                let singlechar = twelvebit.charAt(bit);
                if(singlechar == 1){
                    oxyArray.splice(i, 1);
                }
            }
        } else {
            for(let i=oxyArray.length-1 ; i>=0;i--){
                let twelvebit = oxyArray[i];
                let singlechar = twelvebit.charAt(bit);
                if(singlechar == "0"){
                    oxyArray.splice(i, 1);
                }
            }
        }
        bit ++;
    } 
}


function calcCo(){
    bit = 0;
    for(let i = 0; i < textlength; i++){
        let ones = 0;
        let zeros = 0;
        for(let i = 0; i < coArray.length; i++){
            let twelvebit = coArray[i];
            let singlechar = twelvebit.charAt(bit);
            if(singlechar == 1){
                ones ++;
            } else {
                zeros ++;
            }
        }
        if(coArray.length > 1){
            if(zeros > ones){
                for(let i=coArray.length-1 ; i>=0;i--){
                    let twelvebit = coArray[i];
                    let singlechar = twelvebit.charAt(bit);
                    if(singlechar == 0){
                        coArray.splice(i, 1);
                    }
                }
            } else {
                for(let i=coArray.length-1 ; i>=0;i--){
                    let twelvebit = coArray[i];
                    let singlechar = twelvebit.charAt(bit);
                    if(singlechar == 1){
                        coArray.splice(i, 1);
                    }
                }
            }
        }
        bit ++;
    }
}

function converBinaryNum(binary){
    num = parseInt(binary, 2);
    return num;
}