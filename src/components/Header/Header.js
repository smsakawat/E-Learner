

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar expand="lg" fixed='top' className='d-flex justify-conter-center align-items-center  navbar-container' variant='dark'>
            <Container className='py-2 appbar text-light'>
                <Navbar.Brand className='logo'><NavLink to='/home' className='link'><i className="fab fa-edge-legacy"></i>-learner</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-4 my-lg-0"
                        style={{ maxHeight: '500px' }}
                        navbarScroll
                    >
                        <Nav.Link ><NavLink to='./home' className='link'>HOME</NavLink></Nav.Link>
                        <Nav.Link ><NavLink to='/about' className='link'>ABOUT</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/allcourses' className='link'>COURSES</NavLink></Nav.Link>
                        <NavDropdown title="Categories" id="navbarScrollingDropdown">
                            <NavDropdown.Item ><NavLink className='link text-dark' to='/categories/programming'>Programming</NavLink></NavDropdown.Item>

                            <NavDropdown.Item ><NavLink className='link text-dark' to='/categories/marketing'>MARKETING</NavLink></NavDropdown.Item>

                            <NavDropdown.Item ><NavLink className='link text-dark' to='/categories/design'>DESIGN</NavLink></NavDropdown.Item>
                            <NavDropdown.Item ><NavLink className='link text-dark' to='/categories/accounting'>Accounting</NavLink></NavDropdown.Item>
                            <NavDropdown.Item ><NavLink className='link text-dark' to='/categories/finance'>FINANCE</NavLink></NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
