import React, {useState, useEffect} from 'react';


function Game() {
    useEffect(() => {}, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch (`https://api.rawg.io/api/games?id=3498`);
        const item = await fetchItem.json();

        console.log(item);
    }

    return (
        <div>
            <h1> Item </h1>
        </div>
    )
}

export default Game; 