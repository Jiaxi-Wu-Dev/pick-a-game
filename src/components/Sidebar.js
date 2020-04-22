import React from 'react';

const Sidebar = () => {

    const getOnePlayerContent = () => {
        console.log("hello")
    }

    return (
        <div>
            <ul className="sidebar">
                <li className="sidebar-list" onClick={getOnePlayerContent}> One Player </li>
                <li className="sidebar-list"> Two Player </li>
                <li className="sidebar-list"> Free To play</li>
            </ul>
        </div>
    );
}

export default Sidebar;