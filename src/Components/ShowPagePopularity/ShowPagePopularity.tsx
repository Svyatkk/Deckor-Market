import "./ShowPagePopularity.css"
import BlockBook from "../BlockBook/BlockBook"
import { books, calcSalary } from "../../Data/book"
import BanerBookBlock from "../BanerBookBlock/BanerBookBlock"
export default function ShowPagePopularity() {
    return (
        <>


            <div className="">
                <div className="block_popular">
                    <h1>
                        Розпродажа
                    </h1>


                    {books.filter(book => book.price > 300 && book.salarydiscount === false).map((book) => (

                        < BlockBook book={{ ...book, price: calcSalary(book.price, 13) }} childrenBaner={<BanerBookBlock textBaner="Ексклюзив"></BanerBookBlock>}></BlockBook>
                    ))}
                </div>
            </div>
        </>
    )
}
