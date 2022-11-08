import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginImage from '../../image/login.png'
import Social from '../Share/Social/Social';
const Login = () => {

const handleBlurEmail=e=>{

}

const handleBlurPassword =e=>{

}

const handleloginSubmit=e=>{

    e.preventDefault()
}

const resetPassword =()=>{

}


    return (
        <Container className='bg-primary '>
            <Row className='d-flex justify-content-center align-items-center'>
                <Col>
                    <img src={loginImage} className='img-fluid' alt="" />
                </Col>

                <Col>
                    <form onSubmit={handleloginSubmit}>
                        <h2>Please Login</h2>
                        <input onBlur={handleBlurEmail} type="email" name="" id="" placeholder='Email' /> <br />
                        <input onBlur={handleBlurPassword} type="password" name="" id="" placeholder='password' /> <br />
                        {/* <p>{error?.message}</p> */}
                        <input className='reg-btn' type="submit" value="Login" />
                        <p className='mt-2 '>New User? <Link className='text-decoration-none text-dark fw-bold' to='/register'>go to Register page</Link> </p>

                        <button onClick={resetPassword} className='btn btn-danger'> resetPassword</button>
                        
                    </form>
                    <Social></Social>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;