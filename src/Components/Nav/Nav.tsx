import './Nav.css'
import CatalogPanel from '../CatalogPanel/CatalogPanel'
import { useState } from 'react'

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <nav>

                <div className="logo">

                </div>

                <div className="searching_block">




                    <a
                        onClick={(e) => {
                            e.preventDefault()

                            setIsOpen(true)
                        }}
                        href='#' className="button_catalog">



                    </a>

                    <label htmlFor="">


                        <input className="input_search" type="text" />

                    </label>

                    <button className="button_change_theme">


                    </button>

                </div>

                <div className="buttons_client">

                    <div>

                    </div>




                    <div>

                    </div>

                    <div>

                    </div>
                </div>



            </nav >
            <CatalogPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />

        </>
    )
}