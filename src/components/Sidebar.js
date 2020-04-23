import React, { Component } from 'react';
import axios from 'axios'


class Sidebar extends Component {
    constructor (props)
    {
        super(props);

        this.state = {
            games: [],
            oneplayer: []
        };
    }
    
    //create a function that gets data for one player games
    componentDidMount(){
        axios.get("https://api.rawg.io/api/games?page_size=10")
            .then(res => {
                console.log(res)
                this.setState({
                    games: res.data.results
                })
            })
            .catch(error => {
                console.log('error:', error);
            })
    }

    render() {
        return (<div>

            <ul className="sidebar">
                <li className="sidebar-list" onClick={this.getOnePlayerContent}> One Player </li>
                <li className="sidebar-list"> Two Player </li>
                <li className="sidebar-list"> Free To play</li>
            </ul>
            <ul>
                {this.state.games.map(game => <li> {game.name} </li>)}
            </ul>

        </div>);
    }
}

export default Sidebar;
