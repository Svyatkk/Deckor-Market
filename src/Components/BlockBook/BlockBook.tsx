import './BlockBook.css'
import { BooksParam } from "../../Data/book";
import BanerBookBlock from '../BanerBookBlock/BanerBookBlock';
import { ReactNode } from 'react';
type BlockBookProps = {
    book: BooksParam;
    children?: ReactNode
}




export default function BlockBook({ book, children }: BlockBookProps) {
    return (
        <>


            <div className='block'>
                <div className='baner'>
                    {children}

                </div>
                <p className='author_block'>{book.author}</p>
                <h1 className='name_block'>{book.name}</h1>
                <h3 className='price_block'>{book.price} грн</h3>


                <div className='background_img'>
                    <img src={book.imgHref} alt={book.name} />
                </div>
            </div>
        </>

    )
}
