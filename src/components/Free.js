//Free component 

import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Free extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            games: []
         }
    }

    // componentdidmount calls axios.get after page loads
    componentDidMount() {
        axios.get("https://api.rawg.io/api/games?page_size=20&tags=free-to-play")
            .then(res => {
                // sets state to res.data.results
                this.setState({
                    games: res.data.results
                })

            })
            .catch(error => {
                return(error)
            })
    }

    render() { 
        return ( <div>
            <ul className="list-styling">
                
                {this.state.games.map(game => <li key={game.id}> 
                {/* links to each items page through their id */}
                    <Link to={`/free/${game.id}`}>
                    {game.name} 
                    </Link>
                    </li>)}
            </ul>
        </div> );
    }
}
 
export default Free;
