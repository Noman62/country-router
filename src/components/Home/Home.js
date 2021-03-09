import React, { useEffect, useState } from 'react';
import County from '../Country/County';
import './Home.css';

const Home = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[]);

    return (
        <div className="div-container">
            {
                countries.map(country=><County country={country}></County>)
            }
        </div>
    );
};

export default Home;