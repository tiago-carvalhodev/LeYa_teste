import React from 'react';
import { Link } from 'react-router-dom';

import './home.css'

const Home = () => {
    return(
        <div data-show>
            <h2> Tiago Carvalho's Teste </h2>
            <Link to="/posts"> See grid </Link>
        </div>
    )
}

export default Home;