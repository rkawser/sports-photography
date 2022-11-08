import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import loginImage from '../../image/login.png'
import Loading from '../Share/Loading';
import Social from '../Share/Social/Social';
import swal from 'sweetalert';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, Googleuser, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, Reseterror] = useSendPasswordResetEmail(auth);

    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }

    if (error || Reseterror) {
        swal({
            title: `Login Failed !`,
            text: "Something went Wrong",
            icon: "error",
        });
    }


    const handleBlurEmail = e => {
        setEmail(e.target.value)
    }

    const handleBlurPassword = e => {
        setPassword(e.target.value)
    }

    const handleloginSubmit = e => {
        signInWithEmailAndPassword(email, password)
            .then(() => {
                swal("Good Job!", "Login Success!", "success");
            })
        e.preventDefault()
    }

    const resetPassword = async () => {
        await sendPasswordResetEmail(email)
        swal("Reset Email send!", "You can check your gmail!", "success");
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