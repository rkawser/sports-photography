import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginImage from '../../../image/login.png';
import Social from '../../Share/Social/Social';
import './Register.css';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [name, setName] = useState('');



    const handleBlurName = e => {
        setName(e.target.value)
    }

    const handleBlurEmail = e => {
        setEmail(e.target.value)
    }

    const handleBlurPassword = e => {
        setPassword(e.target.value)
    }

    const handleBlurConfirm = e => {
        setConfirmPass(e.target.value)
    }

    const handleSubmit = e => {

        e.preventDefault()
    }



    return (
        <Container className='bg-primary'>
            <Row className='d-flex justify-content-center align-items-center'>
                <Col>
                    <img src={loginImage} className='img-fluid' alt="" />
                </Col>

                <Col className=''>
                    <form onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <input onBlur={handleBlurName} type="text" name="" id="" placeholder='name' /> <br />
                        <input onBlur={handleBlurEmail} type="email" name="" id="" placeholder='Email' /> <br />
                        <input onBlur={handleBlurPassword} type="password" name="" id="" placeholder='password' /> <br />
                        <input onBlur={handleBlurConfirm} type="password" name="" id="" placeholder='confirm password' /> <br />
                        {/* <p>{error?.message}</p> */}
                        <input className='reg-btn' type="submit" value="Register" />
                        <p className='mt-2 '>Already a user? <Link className='text-decoration-none text-dark fw-bold' to='/login'>go to login page</Link> </p>
                    </form>
                    <Social></Social>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;