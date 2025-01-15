function identicalLetters(str1: string, str2: string): string {
    let result = ""; 
    for (let i = 0; i < str1.length; i++) { 
        if (str2.includes(str1[i])) { 
            result += str1[i]; 
        }
    }
    return result;  
}

console.log(identicalLetters("nubik", "natan")); 
console.log(identicalLetters("lolil", "kekik")); 