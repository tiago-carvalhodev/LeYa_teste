import React from 'react';
import "./item.css";

const GridItem = props => {
    let data = props.props;
    let log = console.log;

    // Formatação da data
    const formatDate = (date) => {
        let d = new Date(date);
        let month = (d.getMonth() + 1).toString();
        let day = d.getDate().toString();
        let year = d.getFullYear();
        return [day, month, year].join('-');
    }

    let date = formatDate(data.updatedAt);

    return(
        <div data-item>
            {data.images.length == 1 ?
                <img src={data.images[0].url} alt={data.images[0].caption} width="400" />
                :
                <img src={data.images[0].url}  alt={data.images[0].caption} width="400" />
            }
            <h2> {data.title} </h2>
            <span> {date} </span>
            <p dangerouslySetInnerHTML={{ __html: `${data.subtitle}` }} />
        </div>
    )
}

export default GridItem;