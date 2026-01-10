
import React from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../../Data/book';
import './BookInformation.css';
import Nav from '../Nav/Nav';
import { catalogs } from '../../Data/book';
import { Link } from 'react-router-dom';


export default function BookInformation() {



    const { name } = useParams();

    const decodedName = name ? decodeURIComponent(name) : '';

    const currentBook = books.find(
        book => book.name === decodedName
    );



    if (!currentBook) {
        return <h2 className="titleBook">Книгу не знайдено</h2>;
    }



    return (
        <>


            <div className='section_show_book'>



                <Nav></Nav>
                <div className='panels'>
                    {currentBook.catalog.map((entry, index) => (
                        <div key={index} className="category-links">
                            <Link className='link' to={`/category/${encodeURIComponent(entry.mainCategory)}`}>
                                {entry.mainCategory}
                            </Link>


                            <span style={{ color: 'gray' }}>|</span>

                            <Link className='link' to={`/category/${encodeURIComponent(entry.mainCategory)}/${encodeURIComponent(entry.subCategory)}`}>
                                {entry.subCategory}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className='block_unit'>

                    <div className='show_img_books'>


                    </div>


                    <div className='show_parameters_books'>

                        <a href='#'>{currentBook.author}</a>
                        <h1>{currentBook.name}</h1>

                    </div>
                </div>


            </div>


        </>
    );
}
