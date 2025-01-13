function indexOf(str: string, subStr: string): number {
    for (let i = 0; i <= str.length - subStr.length; i++) {
        let matchCount = 0; 
        for (let j = 0; j < subStr.length; j++) {
            if (str[i + j] === subStr[j]) {
                matchCount++; 
            } else {
                break; 
            }
        }
        if (matchCount === subStr.length) {
            return i; 
        }
    }
    return -1;
}

console.log(indexOf("хочу банан", "банан")); 
console.log(indexOf("пикми палитра", "убежище"));   