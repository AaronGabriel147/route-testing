import React, { useEffect, useState } from "react";
import axios from 'axios';


const Cosmos = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=I7FKEo5cyioKDlwxTjWorNCaEg8P0SWvuZkXMoNN')
            .then(res => {
                console.log(res.data)
                setData(res.data)
              })
            .catch(err => console.log('err!!!!', err))
    }, [])

    return (
        <div>
            <h1>Cosmos.js</h1>
            <img src={data.url} alt={data.title}/>
            <h1>{data.title}</h1>
            <p>{data.explanation}</p>
        </div>
    );
}
 
export default Cosmos;