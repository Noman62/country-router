import React from 'react';
import { useHistory } from 'react-router';
import './Country.css';
import {  Card } from 'react-bootstrap';
import { Button } from '@material-ui/core';

const County = (props) => {
    const { name, capital, flag, alpha3Code } = props.country;

    let history = useHistory();
    const handleAddCountry = (alpha3Code) => {
        history.push(`/country/${alpha3Code}`)
    }
    return (

        <Card style={{ width: '18rem', backgroundColor: '#00FF7F' }} className="country-info" >
            <img src={flag} alt=""></img>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>{capital}</p>
               
                <Button variant="contained" color="secondary" onClick={() => handleAddCountry(alpha3Code)}>More Details</Button>
            </Card.Body>
        </Card>

    );
};

export default County;