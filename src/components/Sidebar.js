import React, { Component } from 'react';
import axios from 'axios'


class Sidebar extends Component {
    state = {
        games:[]
    }

    //create a function that gets data for one player games
    getOnePlayerContent = () => {
        axios.get("https://api.rawg.io/api/games?page_size=10")
            .then(res => {
                console.log(res)
                this.setState({
                    games: res.data
                })
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
