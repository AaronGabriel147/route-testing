import React, { useEffect, useState } from "react";
import axios from 'axios';


const About = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then(res => {
                // console.log(res)
                setData(res.data.results)
              })
            .catch(err => console.log('err!!!!', err))
    }, [])
    
    // console.log(data) // All data.

    return (
        <div>
            {/* <h1>About.js</h1> */}
            <h2 className="title">Rick & Morty</h2>
            {data.map((result) => (
                <div className="text">
                    <img src={result.image} alt={`Image of ${result.name}`} />
                    <h2 key={result.id}>{result.name}</h2>
                    <p key={result.id}>Species: {result.species}</p>
                    <p key={result.id}>Gender: {result.gender}</p>
                    <p key={result.id}>Status: {result.status}</p>
                    <p key={result.id}>Origin: {result.location.name}</p>
                </div>
            ))}
        </div>
    );
}
 
export default About;