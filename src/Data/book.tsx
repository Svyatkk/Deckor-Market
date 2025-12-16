interface BooksParam {
    author: string;
    price: number;
    name: string;
    pageAmount: number;
    publishing: string;
    cover: CoverType;
    language: string;
}

enum CoverType {
    Hard = "Тверда",
    Soft = "Мʼяка"
}


export const books: BooksParam[] = [
    {
        author: "Джордж Орвелл",
        name: "1984",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська"
    }
];



function createBook(book: BooksParam): BooksParam {
    books.push(book);
    return book;
}
