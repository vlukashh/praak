function runLengthEncoding(str: string): string {
    let result = ""; 
    let count = 1;   

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) { 
            count++; 
        } else {
            result += str[i] + count; 
            count = 1; 
        }
    }
    return result; 
}

console.log(runLengthEncoding("annaac")); 
console.log(runLengthEncoding("cccb")); 


function runLengthDecoding(encodedStr: string): string {
    let result = ""; 

    for (let i = 0; i < encodedStr.length; i += 2) { 
        let char = encodedStr[i];
        let count = parseInt(encodedStr[i + 1]); 
        for (let j = 0; j < count; j++) { 
            result += char;
        }
    }
    return result; 
}

console.log(runLengthDecoding("a1n2a2c1"));
console.log(runLengthDecoding("c3b1"));  