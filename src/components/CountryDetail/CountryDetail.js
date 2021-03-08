import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {alpha3Code}=useParams();
    const [countryDetail,setCountryDetail]=useState([]);
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
        .then(res=>res.json())
        .then(data=>setCountryDetail(data));
    },[alpha3Code]);
    console.log(CountryDetail);
    const {name,capital}=countryDetail;
    return (
        <div>
            <h1>this is country detail:{name}</h1>
            <h4>Capital:{capital}</h4>
    
        </div>
    );
};

export default CountryDetail;