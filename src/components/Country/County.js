import React from 'react';
import { useHistory } from 'react-router';
import './Country.css';

const County = (props) => {
    const {name,capital,flag,alpha3Code}=props.country;
    
    let history=useHistory();
    const handleAddCountry=(alpha3Code)=>{
        history.push(`/country/${alpha3Code}`)
    }
    return (
        <div className="country-info">
            <img src={flag} alt=""></img>
            <h3>{name}</h3>
            <h4>{capital}</h4>
            <button onClick={()=>handleAddCountry(alpha3Code)}>Select Country</button>
          
        </div>
    );
};

export default County;