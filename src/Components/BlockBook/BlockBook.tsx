import './BlockBook.css'
import { books } from "../../Data/book";


export default function BlockBook() {
    return (
        <>

            <div className='block'>



                {books.map(book => (
                    <div key={book.name}>
                        {book.author}


                        <h1>{book.price}</h1>
                    </div>

                ))}

            </div>
        </>
    )
}
