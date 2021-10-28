import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user, logOut}= useAuth()
  return (
    <div>
      <Navbar bg="dark" variant="dark" >
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home/#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/addService">Add Service</Nav.Link>
      <Nav.Link as={HashLink} to="/manageService">Manage Service</Nav.Link>
      <Nav.Link as={HashLink} to="/home/#experts">Experts</Nav.Link>
      {user?.email ?
      <button onClick={logOut}>logOut</button>:
      <Nav.Link as={HashLink} to="/login">LogIN</Nav.Link>}
    </Nav>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName }</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  );
};

export default Header;