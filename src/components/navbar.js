import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar-container">
            <ul className="navbar">
                <Link to='/'>
                    <li className="navbar-list"> Home </li>
                </Link>
                <Link to='/about'>
                    <li className="navbar-list"> About </li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar;



