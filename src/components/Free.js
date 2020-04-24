/* import React, { Component } from 'react';
import axios from 'axios'

class Free extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            games: [],
            setGames:
         }
    }

    componentDidMount() {
        axios.get("https://api.rawg.io/api/games?&page_size=20&tags=free-to-play")
            .then(res => {
                console.log(res)
                this.setState({
                    games: res.data.results
                    setGames: 
                })

            })
            .catch(error => {
                console.log('error:', error);
            })
    }

    render() { 
        return ( <div>
            <ul className="list-styling">
            {this.state.games.map(game =><li> {game.name} </li>)}
            </ul>
        </div> );
    }

}
 
export default Free; */
/* Using https://www.youtube.com/watch?v=Law7wfdg_ls&t=585s a guide  */

import React, {useState, useEffect } from 'react';

function Free() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [gameTitles, setTitles] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            "https://api.rawg.io/api/games?&page_size=20&tags=free-to-play"
            );

        const gameTitles = await data.json();
        console.log(gameTitles.gameTitles);
        setTitles(gameTitles.gameTitles);
    };

    return (
        <div>
            {gameTitles.map(title => (
                <h1>{title.name} </h1>
            ))}
        </div>
    );
}

export default Free;