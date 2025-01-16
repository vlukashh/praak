
function createBook(title: string, year: number, author: string): object {

    const queryParams = new URLSearchParams({
        title: title,
        year: year.toString(),
        author: author
    });

    let book = {
        title: title, 
        year: year,   
        author: author, 
        preview: `Название: ${title}, Автор: ${author}, Год: ${year}`, 
        url: `www.someurl.com/preview?${queryParams.toString()}`
    };

    return book; // Возвращаем объект book
}

// Пример использования:
const data = {
    title: "Угар",
    year: 1904,
    author: "Александр Куприн",
};

const content = createBook(data.title, data.year, data.author);
console.log(content);
