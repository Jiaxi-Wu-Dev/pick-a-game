import React, {useState, useEffect} from 'react';
import './App.css';

function Game() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {}
    }
}