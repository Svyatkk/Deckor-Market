import React from "react"
import './Nav.css'
import { useState } from "react"
export default function Nav() {







    return (
        <>
            <nav>
                <div className="blue_polosa">
                    <div className="content_1">
                        <a href="#">Whishlist</a>
                        <a href="#">Find A Store</a>
                        <a href="#">Blog</a>

                    </div>
                    <div className="content_2">
                        <p>Take your Home Interiors to Next Level</p>
                    </div>

                    <div className="content_3">
                        <a href="#">Instagram Feed</a>
                        <a href="#">Inspiration Gallery</a>
                        <a href=""><img src="DeckorMarket\public\icons8-instagram-64.png" alt="" /></a>
                    </div>
                </div>

                <header>


                    <div className="logo_input_block">
                        <div className="logo">

                        </div>

                        <label>
                            <select name="" id="">

                                <option value="">All Categories</option>
                                <option value="">laminate</option>
                                <option value="">louver</option>
                                <option value="">veneer</option>


                            </select>
                            <div className="palka"></div>
                            <input type="text" /></label>

                        <div className="href_buttons_types">

                            <a href="">Laminate</a>



                        </div>
                    </div>


                    <div className="login_block">


                    </div>

                </header>

            </nav>

        </>
    )
}