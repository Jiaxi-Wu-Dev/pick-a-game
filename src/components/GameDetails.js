import React, {useState, useEffect} from 'react';


function Game({ match }) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({
        images:{}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch (
            `https://api.rawg.io/api/games/${match.params.id}`);

        const item = await fetchItem.json();
            setItem(item)
    }

    return (
        <div className="container-details">
            <h1 className="rainbow-text"> Name: {item.name} </h1>
            <img src={item.background_image} alt="" width="500px"/>
            <h1 className="rainbow-text"> Description: {item.description} </h1>
            <h1 className="rainbow-text"> Rating: {item.rating} </h1>
            <h1 className="rainbow-text"> Released: {item.released} </h1>
        </div>
    )
}

export default Game; 