import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Twoplayer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            games: []
         }
    }

    componentDidMount() {
        axios.get("https://api.rawg.io/api/games?page_size=20&tags=multiplayer&tags=online")
            .then(res => {
                
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
                    <Link to={`/twoplayer/${game.id}`}>
                    {game.name} 
                    </Link>
                    </li>)}
            </ul>
        </div> );
    }
}
 
export default Twoplayer;


