import './BlockBook.css'
import { BooksParam } from "../../Data/book";

type BlockBookProps = {
    book: BooksParam;
}



export default function BlockBook({ book }: BlockBookProps) {
    return (
        <div className='block'>
            <p className='author_block'>{book.author}</p>
            <h1 className='name_block'>{book.name}</h1>
            <h3 className='price_block'>{book.price} грн</h3>

            <div className='background_img'>
                <img src={book.imgHref} alt={book.name} />
            </div>
        </div>
    );
}
