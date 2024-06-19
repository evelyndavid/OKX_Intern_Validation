import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../assets/logo.png';

export default function Navv() {

    const handleLogin=()=>{
        window.location.href='/login'
    }

    const handleSignUp=()=>{
         window.location.href='/signup'

    }
  return (
    <Navbar bg="dark" data-bs-theme="dark" className='navv'>
      <Container>
        <Navbar.Brand href="#home" >
          <img src={Logo} alt="Logo" className='logo'/>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={handleLogin}>Log in</Nav.Link>
          <Nav.Link ><button className='signup-btn' onClick={handleSignUp}>Sign Up</button></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
