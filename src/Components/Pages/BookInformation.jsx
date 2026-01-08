
import React from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../../Data/book';
import './BookInformation.css';
import Nav from '../Nav/Nav';




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

                <div className='show_img_books'>


                </div>

                <div className='show_parameters_books'>

                </div>

            </div>


        </>
    );
}
