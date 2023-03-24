/* eslint-disable */
import React from "react";

const Navbar = () => {
    const date = new Date().toLocaleDateString();
    return (
        <nav className="nav-bar">
            <h2>Greatest Quotes and a Calculator 😊</h2>
            <p>{date}</p>
        </nav>
    )
}

export default Navbar;