async function fetchData(url: string): Promise<any> {
    try {
        let response = await fetch(url); 
        if (!response.ok) {              
            throw new Error("Ошибка при получении данных"); 
        }
        let data = await response.json(); 
        return data;                      
    } catch (error) {
        console.error("Ошибка при получении данных"); 
        return null;                  
    }
}


fetchData("https://e21ae183846cd1ed.mokky.dev/items").then((data) => {
        if (data) {
            console.log(data); 
        }
});