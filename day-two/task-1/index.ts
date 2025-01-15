function countFilledValues(obj: Record<string, unknown>): number {

    let count = 0; 
    for (let key in obj) { 
        let value = obj[key]; 
        if (value !== null && value !== undefined && value !== "") { 
            count++; 
        }
    }

    return count; 
}

const inf = {
    name: "Вика",
    age: "",
    address: "Томск",
    phone: 88005553535,
    email: undefined,
    notes: null,
};

console.log(countFilledValues(inf)); 