function fakeApi(): Promise<object[]> {
    return new Promise((resolve) => { 
        setTimeout(() => {            
            let data = [              
                {
                    id: "1",
                    name: "Вика",
                    phone: "88005553535",
                    email: "vlukashh@puk.com",
                    location: "Томск",
                    status: "active",
                },
                {
                    id: "2",
                    name: "Натан",
                    phone: "89007777777",
                    email: "natan@pik.com",
                    location: "Томск",
                    status: "delete",
                },
            ];
            resolve(data); 
        }, 3500);
    });
}

// Пример использования:
fakeApi().then((data) => {
    console.log(data); 
});