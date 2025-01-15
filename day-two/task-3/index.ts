function createBook(title: string, year: number, author: string): object {
    let book = { 
        title: title,         
        year: year,           
        author: author,      
        preview: `Название: ${title}, Автор: ${author}, Год: ${year}`, 
        url: `www.someurl.com/preview?title=${title}&year=${year}&author=${author}` 
    };

    return book; 
}

const data = {
    title: "Угар",
    year: 1904,
    author: "Александр Куприн",
};

const content = createBook(data.title, data.year, data.author);
console.log(content);