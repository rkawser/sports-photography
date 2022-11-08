import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Button, Card } from 'react-bootstrap';
const Service = ({ service }) => {
    const { img, name, id } = service;
    return (
        <div className='col-lg-4 col-sm-12 col-md-6 g-2 mt-5'>
            <Card className='h-100' >
                <Card.Img variant="top" src={img}  className='h-100' />
                <Card.Body className='bg-dark '>
                    <Button variant="primary" >Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;