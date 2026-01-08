export type BooksParam = {
    author: string;
    price: number;
    name: string;
    pageAmount: number;
    publishing: string;
    cover: CoverType;
    language: string;
    popularity: number;
    imgHref: string;
    salarydiscount: boolean,
    timeAdded: string

}

export enum CoverType {
    Hard = "Тверда",
    Soft = "Мʼяка"
}



export function calcSalary(price: number, amount: number): number {
    return price - (price * amount) / 100
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
        imgHref: "",
        salarydiscount: true,
        timeAdded: "",

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
        imgHref: "",
        salarydiscount: true,
        timeAdded: ""
    },
    {
        author: "Фтщерук Хтось",
        name: "Соляріс",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська",
        popularity: 0,
        imgHref: "",
        salarydiscount: false,
        timeAdded: ""
    },
    {
        author: "Фтщерук Хтось",
        name: "Соляріс",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська",
        popularity: 0,
        imgHref: "",
        salarydiscount: false,
        timeAdded: ""
    },
    {
        author: "Фтщерук Хтось",
        name: "Соляріс",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська",
        popularity: 0,
        imgHref: "",
        salarydiscount: false,
        timeAdded: ""
    },
    {
        author: "Фтщерук Хтось",
        name: "Соляріс",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська",
        popularity: 0,
        imgHref: "",
        salarydiscount: false,
        timeAdded: ""

    }
];






