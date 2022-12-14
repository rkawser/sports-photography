import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile,useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import loginImage from '../../../image/login.png';
import Social from '../../Share/Social/Social';
import './Register.css';
import swal from 'sweetalert';
import PageTitle from '../../Share/PageTitle';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [name, setName] = useState('');

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, Updateupdating, Updateerror] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, verifiederror] = useSendEmailVerification(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    if (user) {
        navigate(from, { replace: true });
    }

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
        if (confirmPass !== password) {
            swal("your password does not match!", "try again!", "error");
        } else {
            createUserWithEmailAndPassword(email, password)
                .then(() => {
                    updateProfile({ displayName: name })
                    sendEmailVerification();
                    swal("send verified email!", "You check Gmail!", "success");
                })

        }
        e.preventDefault()
    }



    return (
        <Container className='bg-primary'>
            <PageTitle title='Register'></PageTitle>
            <Row className='d-flex justify-content-center align-items-center'>
                <Col>
                    <img src={loginImage} className='img-fluid' alt="" />
                </Col>

                <Col className=''>
                    <form onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <input onBlur={handleBlurName} type="text" name="" id="" placeholder='name' required /> <br />
                        <input onBlur={handleBlurEmail} type="email" name="" id="" placeholder='Email' required /> <br />
                        <input onBlur={handleBlurPassword} type="password" name="" id="" placeholder='password' required /> <br />
                        <input onBlur={handleBlurConfirm} type="password" name="" id="" placeholder='confirm password' required /> <br />
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