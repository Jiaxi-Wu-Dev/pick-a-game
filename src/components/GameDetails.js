import React, {useState, useEffect} from 'react';


function Game({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({
        images:{}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch (
            `https://api.rawg.io/api/games/${match.params.id}`);

        const item = await fetchItem.json();
            setItem(item)
        console.log(item);
    }

    return (
        <div>
            <h1> {item.name} </h1>
            <img src={item.background_image} alt="" width="300px"/>
        </div>
    )
}

export default Game; 