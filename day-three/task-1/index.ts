function delayPromise(delay: number, message: string): Promise<string> {
    return new Promise((resolve) => { 
        setTimeout(() => {            
            resolve(message);         
        }, delay);
    });
}

// Пример использования:
delayPromise(2000, "ку").then((result) => {
    console.log(result);
});