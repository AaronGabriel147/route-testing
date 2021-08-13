import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const Cosmos = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=I7FKEo5cyioKDlwxTjWorNCaEg8P0SWvuZkXMoNN')
            .then(res => {
                // console.log(res.data)
                setData(res.data)
              })
            .catch(err => console.log('err!!!!', err))
    }, [])

    // console.log(data.hdurl)


    return (
        <>
            <img src={data.url} alt={data.title}/>
                <h1>{data.title}</h1>
            <div className="cosmos-cta">
                <p className="apod-text">{data.explanation}</p>
            </div>
            <a className="hd-url" href={data.hdurl}>Full size image.</a>
        </>
    );
}
 
export default Cosmos;