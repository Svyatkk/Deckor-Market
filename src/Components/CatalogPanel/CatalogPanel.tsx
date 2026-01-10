import { ReactNode, useState } from "react"
import { catalogs } from "../../Data/book"
import './CatalogPanel.css'


type Props = {
    isOpen: boolean,
    onClose: () => void
}






export default function CatalogPanel({ isOpen, onClose }: Props) {




    return (

        <>
            <section className={`catalog_panel ${isOpen ? "open" : " "}`}>




                <a onClick={(e) => {
                    e.preventDefault()
                    onClose()

                }} href="">close</a>


                <div style={{ backgroundColor: "white" }}>
                    {catalogs.map(catalog => catalog.mainCategory)}

                </div>


            </section>
        </>
    )
}