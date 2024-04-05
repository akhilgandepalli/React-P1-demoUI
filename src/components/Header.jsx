import React from "react";
import { useState } from "react";


const Header = () =>{

    return(
        <header>
            <div className="logo"><img src="./logo.png" alt="Logo" /></div>
            <ul>
                <li href="#">Men</li>
                <li href="#">Women</li>
                <li href="#">Kids</li>
                <li href="#">Sports</li>
                <li href="#">More</li>
            </ul>
            <div className="header-options">
                <form className="search-form">
                    <input type="text" className="search-input" placeholder="Search" />
                    <button className="search-btn"><ion-icon name="search-outline"></ion-icon></button>
                </form>
                <ion-icon name="person-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="bag-handle-outline"></ion-icon>
            </div>
        </header>
    )
}

export { Header };