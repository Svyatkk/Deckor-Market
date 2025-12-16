import { books } from "../../Data/book";


export default function Main() {
    return (
        <>




            {books.map(book => (
                <div key={book.name}>
                    {book.author}
                </div>
            ))}
        </>
    );
}
