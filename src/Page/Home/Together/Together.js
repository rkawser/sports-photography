import React from 'react';
import { Container } from 'react-bootstrap';
import './Together.css';

const Together = () => {

    return (

        <div className='mb-5 t-banner d-flex justify-content-center align-items-center'>
            <Container className=''>
                <div className='t-text'>
                    <h1>Let’s Work Together</h1>
                    <h5>Passion for progress and joy of a good work and a positive feedback.</h5>
                    <button className='t-btn'>Contact Us</button>
                </div>
            </Container>
        </div>
    );
};

export default Together;