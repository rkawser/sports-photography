import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png'
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import {signOut} from 'firebase/auth'

const Header = () => {

  const [user]= useAuthState(auth);

  return (
    <Navbar collapseOnSelect sticky='top'  expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> <img src={logo} height={50} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link  href="/home#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
{         user ?
            <button onClick={()=>signOut(auth)} className='btn btn-danger'>signOut</button>
            :
            <Nav.Link as={Link} to='/login' className='btn btn-primary' eventKey={2} href="#memes">
              Login
            </Nav.Link>}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;