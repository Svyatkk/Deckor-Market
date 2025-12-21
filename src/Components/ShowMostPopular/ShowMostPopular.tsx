import { books } from "../../Data/book"
import BlockBook from "../BlockBook/BlockBook"
import "./ShowMostPopular.css"






export default function ShowMostPopular() {




    return (
        <>




            <div className="block_popularity">
                <h1>
                    Найпопулярніші книги
                </h1>
                {books.filter(book => book.price > 200).map((book, index) => (
                    <BlockBook key={index} book={book} />



                ))}

            </div>



        </>
    )
}