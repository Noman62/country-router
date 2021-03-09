import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Card} from 'react-bootstrap';
import { Button } from '@material-ui/core';

const CountryDetail = () => {
    const { alpha3Code } = useParams();
    const [countryDetail, setCountryDetail] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
            .then(res => res.json())
            .then(data => setCountryDetail(data));
    }, [alpha3Code]);
    console.log(CountryDetail);
    const { name, capital, flag, region, population } = countryDetail;
    const history=useHistory();
    return (

       <div class="d-flex justify-content-center">
            <Card style={{ width: '18rem',backgroundColor:'#00FFFF'}}>
            <img src={flag} alt=""></img>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>Capital : {capital}</p>
                <p>Region : {region}</p>
                <p>Population : {population}</p>
             <div class="d-flex justify-content-center">
             <Button variant="contained" color="secondary" onClick={()=>history.goBack()}>Back</Button>
            </div>
            </Card.Body>
        </Card>
       </div>
    );
};

export default CountryDetail;