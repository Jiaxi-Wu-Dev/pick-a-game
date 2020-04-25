import React, {useState, useEffect} from 'react';


function Game({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch (
            `https://api.rawg.io/api/games/${match.params.id}`);

        const item = await fetchItem.json();
            setItem(item)
        console.log(item);
    }

    return (
        <div>
            <h1> Item </h1>
        </div>
    )
}

export default Game; 