import React from 'react';
import GridItem from '../GridItem/gridItem';

import "./grid.css";

const Grid = props => {
    let log = console.log;
    let posts = props.props;
    
    return(
        <div data-grid>
            {posts.map((item, i) =>
                <GridItem key={i} props={item} />
            )}
        </div>
    )
}

export default Grid;