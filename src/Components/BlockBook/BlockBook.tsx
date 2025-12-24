import './BlockBook.css'
import { books, BooksParam } from "../../Data/book";
import BanerBookBlock from '../BanerBookBlock/BanerBookBlock';
import { Children, ReactNode } from 'react';

type BlockBookProps = {
    book: BooksParam;
    childrenBaner?: ReactNode
}




export default function BlockBook({ book, childrenBaner }: BlockBookProps) {
    return (
        <>
            <div className='block'>
                <div className='baner'>
                    {childrenBaner}
                </div>

                <p className='author_block'>{book.author}</p>
                <h1 className='name_block'>{book.name}</h1>
                <h3 className='price_block'>{book.price} грн</h3>


                <div className='background_img'>
                    <img src={book.imgHref} alt={book.name} />
                </div>
            </div >
        </>

    )
}
