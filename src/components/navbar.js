import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar-container">
            <ul className="navbar">
                {/* list items used as links to different pages */}
                <Link to='/' style={navStyle}>
                    <li className="navbar__list">Home</li>
                </Link>
                <Link to='/settings' style={navStyle}>
                    {/*  link to settings  */}
                    <li className="navbar__list">About</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar;



