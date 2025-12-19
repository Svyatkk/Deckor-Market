import './BlockBook.css'
import { books } from "../../Data/book";


export default function BlockBook() {
    return (
        <>

            <div className='block'>



                {books.map(book => (
                    <div key={book.name}>
                        <p className='author_block'>{book.author}</p>
                        <h1 className='name_block'>{book.name}</h1>


                        <h3 className='price_block'>{book.price} грн</h3>
                    </div>

                ))}

            </div>
        </>
    )
}
