import { ReactNode } from "react";
import { books } from "../../Data/book";
import { BooksParam } from "../../Data/book";
import BlockBook from "../BlockBook/BlockBook";
import "./Main.css";
import ShowMostPopular from "../ShowMostPopular/ShowMostPopular";


type MainProps = {
    children?: ReactNode;
}

export default function Main({ children }: MainProps) {

    return (

        <>

            <main >



                {children}
                <ShowMostPopular></ShowMostPopular>


            </main>

        </>
    );
}
