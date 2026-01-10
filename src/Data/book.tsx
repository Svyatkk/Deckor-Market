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
    timeAdded: string,
    genre: string
    catalog: CatalogEntry[]
}

export type CatalogSubItem = { name: string };
export type CatalogMainItem = { mainCategory: string; subCategories: CatalogSubItem[] };
export type CatalogEntry = { mainCategory: string; subCategory: string };


export const catalogs: CatalogMainItem[] = [
    {
        mainCategory: "Художня література",
        subCategories: [
            { name: "Сучасна проза" },
            { name: "Класична література" },
            { name: "Фантастика" },
            { name: "Містика і жахи" }
        ]
    },
    {

        mainCategory: "Нонфікшн",
        subCategories: [
            { name: "Історія" },
            { name: "Наука й технології" },
            { name: "Мотивація й саморозвиток" },
            { name: "Мистецтво і культура" }
        ]
    }
];



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
        genre: "Фантастика",
        catalog: [
            { mainCategory: "Художня література", subCategory: "Сучасна проза" }
        ]
    },


    {

        author: "Джордж Орвелл",
        name: "dif",
        price: 320,
        pageAmount: 328,
        publishing: "Видавництво Старого Лева",
        cover: CoverType.Hard,
        language: "Українська",
        popularity: 0,
        imgHref: "",
        salarydiscount: true,
        timeAdded: "",
        genre: "Фантастика",
        catalog: [
            { mainCategory: "Художня література", subCategory: "Фантастика" }
        ]
    },




];






