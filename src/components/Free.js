import React, { Component } from 'react';

class Free extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            games: []
         }
    }

    componentDidMount() {
        axios.get("https://api.rawg.io/api/games?page_size=10&tag=7")
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

        </div> );
    }

}
 
export default Free;<div>
</div>