import React from 'react';
import GridItem from '../GridItem/gridItem';
import { useState, useEffect } from 'react';
import "./grid.css";
import { Link } from 'react-router-dom';

const apiUrl = "https://bla.production.ms.leya.ninja/api/posts/";

const Grid = props  => {
    //Criação das variaveis de estado onde vou guardar as informações
    const [postData, setPostData] = useState([]);
    let log = console.log;


    // Função para chamar a API
    const getData = async () => {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setPostData(jsonData);
    };

    // Hook para realizar a chamda a API cada vez que for aberta a
    useEffect(() => {
        getData();
    }, []);
            
    return(
        <div data-grid>
            {postData.map((item, i) =>
                <Link to={`/posts/${item.id}`}>
                    <GridItem key={i} props={item} />
                </Link>
            )}
        </div>
    )
}

export default Grid;