import { ImportsNotUsedAsValues } from "typescript"
import { books } from "../../Data/book"
import BlockBook from "../BlockBook/BlockBook"
import "./ShowMostPopular.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { calcSalary } from "../../Data/book"
import "swiper/css"
import "swiper/css/pagination"
import BanerBookBlock from "../BanerBookBlock/BanerBookBlock"



export default function ShowMostPopular() {

    return (
        <>

            <div className="block_popularity">
                <h1>
                    Розпродажа
                </h1>

                {books.filter(book => book.price > 200 && book.salarydiscount === true).map((book) => (
                    < BlockBook book={{ ...book, price: calcSalary(book.price, 13) }} childrenBaner={<BanerBookBlock textBaner="Акція"></BanerBookBlock>}></BlockBook>

                ))}
            </div >
        </>
    )
}