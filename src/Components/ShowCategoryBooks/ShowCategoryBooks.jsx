
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../../Data/book';
import Nav from '../Nav/Nav';
import { catalogs } from '../../Data/book';
import BlockBook from '../BlockBook/BlockBook';
import './ShowCategoryBooks.css';




export default function ShowCategoryBooks() {

    const { mainCategory, subCategory } = useParams();

    const decodedMain = mainCategory ? decodeURIComponent(mainCategory) : '';
    const decodedSub = subCategory ? decodeURIComponent(subCategory) : null;


    const filteredBooks = books.filter(book => {
        return book.catalog.some(cat => {
            if (decodedSub) {
                return cat.mainCategory === decodedMain && cat.subCategory === decodedSub
            }
            return cat.mainCategory === decodedMain
        })
    })

    return (
        <>
            <Nav></Nav>


            <div className='catpage'>
                <div className='books'>

                    {filteredBooks.map((book, index) => (
                        <>

                            <BlockBook book={book}></BlockBook>
                        </>

                    ))}

                </div>
            </div>


        </>
    )
}