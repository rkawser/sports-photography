import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    const { img, name, id } = service;
    return (
        <div className='col-lg-4 col-sm-12 col-md-6 g-2 mt-5'>
            <Card className='h-100' >
                <Card.Img variant="top" src={img}  className='h-100' />
                <Card.Body className='bg-dark '>
                    <Link to={`/service/${id}`}><Button variant="primary" >Go somewhere</Button> </Link>               
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;