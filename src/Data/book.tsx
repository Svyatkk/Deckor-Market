export type BooksParam = {
    author: string;
    price: number;
    name: string;
    pageAmount: number;
    publishing: string;
    cover: CoverType;
    language: string;
    popularity: number;
    imgHref: string
}


export enum CoverType {
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
        language: "Українська",
        popularity: 0,
        imgHref: ""

    },



    {
        author: "Хтось Хтось",
        name: "1984",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська",
        popularity: 0,
        imgHref: ""

    }, {
        author: "Фтщерук Хтось",
        name: "Соляріс",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська",
        popularity: 0,
        imgHref: ""
    }
    , {
        author: "Фтщерук Хтось",
        name: "Соляріс",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська",
        popularity: 0,
        imgHref: ""
    }
    , {
        author: "Фтщерук Хтось",
        name: "Соляріс",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська",
        popularity: 0,
        imgHref: ""
    }
    , {
        author: "Фтщерук Хтось",
        name: "Соляріс",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська",
        popularity: 0,
        imgHref: ""
    }


];




