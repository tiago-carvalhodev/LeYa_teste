import React, { useEffect, useState } from 'react';
import {Link,useParams} from "react-router-dom";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

import "./single.css";

const apiUrl = "https://bla.production.ms.leya.ninja/api/posts/";


const SinglePost = props => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    let { id } = useParams();
    let log = console.log

    // Call api com o ID no link
    const getData = async () => {
        const response = await fetch(apiUrl+id);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false)
    };

    // Usei o timeout para ser possivel dar load as imagens
    useEffect(() => {
        setTimeout(getData() ,1000)
    }, []);

    return(
        <div data-single>
            {loading ? 
                <p> Loading ...</p>
            :
                <>
                    <img src={data.images[0].url} alt={data.images[0].caption} />
                    <div data-content>
                        <Link to="/posts/"> <BsFillArrowLeftCircleFill /> </Link>
                        <p dangerouslySetInnerHTML={{ __html: `${data.description}` }} />
                    </div>
                </>
            }

        </div>
    )
}

export default SinglePost;