import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const NavigationBar = ({ user, onLoggedOut }) => {

    return (
        <Navbar data-bs-theme="dark" bg="black" fixed="top" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">MyFlix</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        {!user && (
                            <>
                                <Nav.Link as={Link} to={`/login`}>Login</Nav.Link>
                                <Nav.Link as={Link} to={`/signup`}>Sign Up</Nav.Link>
                            </>
                        )}
                        {user && (
                            <>
                                <Nav.Link as={Link} to={`/`}>Home</Nav.Link>
                                <Nav.Link as={Link} to={`/users`}>Profile</Nav.Link>
                                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
