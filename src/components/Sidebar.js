import React, { Component } from 'react';
import axios from 'axios'


class Sidebar extends Component {
    state = {}



    getOnePlayerContent = () => {
        axios.get("https://api.rawg.io/api/games").then(res => {
            console.log("getting data ---->" + res.json)
        })
    }

    componentDidMount() {
        this.getOnePlayerContent()
    }

    render() {
        return (<div>

            <ul className="sidebar">
                <li className="sidebar-list" onClick={this.getOnePlayerContent}> One Player </li>
                <li className="sidebar-list"> Two Player </li>
                <li className="sidebar-list"> Free To play</li>
            </ul>

        </div>);
    }
}

export default Sidebar;
