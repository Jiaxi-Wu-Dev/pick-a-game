import React, { Component } from 'react';
import axios from 'axios'

class Free extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            games: []
         }
    }

    componentDidMount() {
        axios.get("https://api.rawg.io/api/games?&page_size=20&tags=free-to-play")
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
        return ( <div>
            <ul className="list-styling">
            {this.state.games.map(game => <li> {game.name} </li>)}
            </ul>
        </div> );
    }

}
 
export default Free;