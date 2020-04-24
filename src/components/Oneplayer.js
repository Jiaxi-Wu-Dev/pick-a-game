import React from 'react';
import axios from 'axios';

const Oneplayer = () => {
    async componentDidMount(){
        const response = await axios.get("https://api.rawg.io/api/games?page_size=10&tag=31")
            .then(res => {
                console.log(res)
                this.setState({
                    games: res.data.results
                })

            })
            .catch(error => {
                console.log('error:', error);
            })
        console.log(response)
    } 
    return(<div>

    </div>)
}

export default Oneplayer 