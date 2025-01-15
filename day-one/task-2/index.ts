function longestWord(sentence: string): string {
    let words = sentence.split(" "); 
    let long = ""; 
    for (let i = 0; i < words.length; i++) { 
        if (words[i].length > long.length) { 
            long = words[i]; 
        }
    }
    return long; 
}

console.log(longestWord("Вышел зайчик на крыльцо")); 
console.log(longestWord("Детский садик номер восемь"));