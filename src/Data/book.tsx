interface BooksParam {
    author: string,
    price: number,
    name: string,
    pageAmount: number,
    publishing: string,
    cover: 'Тверда' | 'Мяка',
    language: string
}


function createBook(book: BooksParam): BooksParam {
    return book
}





export const books: BooksParam[] = [
    {

        author: "Джордж Орвелл",
        name: "1984",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: "Тверда",
        language: "Українська",


    }

]