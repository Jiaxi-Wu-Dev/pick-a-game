import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar-container">
            <ul className="navbar">
                {/* list items used as links to different pages */}
                <Link to='/' style={navStyle}>
                    <li className="navbar__list">Home</li>
                </Link>
                <Link to='/pictures' style={navStyle}>
              {/*   link to pictures  */}
                    <li className="navbar__list">Pictures</li>
                </Link>
                <Link to='/favorites' style={navStyle}>
                {/* link to favorites */}
                    <li className="navbar__list">Favorites</li>
                </Link>
                <Link to='/login' style={navStyle}>
                {/* link to login */}
                    <li className="navbar__list">Login</li>
                </Link>
                <Link to='/settings' style={navStyle}>
               {/*  link to settings  */}
                    <li className="navbar__list">Settings</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar;

    
    
    