import { ReactNode } from "react";
import { books } from "../../Data/book";
import { BooksParam } from "../../Data/book";
import BlockBook from "../BlockBook/BlockBook";


type MainProps = {
    children?: ReactNode;



}

export default function Main({ children }: MainProps) {



    return (

        <>



            {children}

        </>
    );
}
