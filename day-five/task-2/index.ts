function splitAmount(amount: number): Record<number, number> {
    const nominal = [100, 50, 10, 5, 2, 1]; 
    const result: Record<number, number> = {}; 

    for (const bill of nominal) { 
        result[bill] = Math.floor(amount / bill)
        amount %= bill;
    }

    return result;
}

const amount = 250;
const result = splitAmount(amount);
console.log(result);
