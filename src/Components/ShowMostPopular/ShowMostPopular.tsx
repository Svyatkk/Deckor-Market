import { books } from "../../Data/book"
import BlockBook from "../BlockBook/BlockBook"

export default function ShowMostPopular() {
    return (
        <>
            <div className="block_popularity">
                {books.filter(book => book.price > 200).map((book, index) => (
                    <BlockBook key={index} book={book}></BlockBook>
                ))
                }

            </div>



        </>
    )
}