import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import {Navbar as NavBar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * navbar component
 * @param {any} props 
 * @returns react.Component navbar render
 */
const Navbar = (props) => {
  
  return (  
  <div className={styles.Navbar} data-testid="Navbar">
    <NavBar bg="primary" variant="dark">
      <Container>
        <NavBar.Brand href="#home">Navbar</NavBar.Brand>
        <Nav className="me-auto">
          
          
          <LinkContainer to='/thumbnail'>
            <Nav.Link href="#">Thumbnail</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/meme'>
            <Nav.Link href="#">Meme</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/add'>
            <Nav.Link href="#">Add</Nav.Link>
          </LinkContainer>
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
      </Container>
    </NavBar>
  </div>
)};

export default Navbar;
