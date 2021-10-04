
import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg py-5 '>
            <div className="container text-light">
                <div className=' d-flex justify-content-between align-items-center'>
                    <div>
                        <p className='fw-bold secondary-color'>SUBSCRIBE NEW AND GO PREMIUM FOR ONE MONTH</p>
                        <h2 className='fw-bold'>Subscribe to our newsletter</h2>
                        <h2>Get updates to news and events</h2>
                    </div>
                    <div className="subscribe-form">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Subscribe here"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-primary">Subscribe</Button>
                        </Form>
                    </div>
                </div>
                <hr className='text-light text-center px-4' />
                <div className="footer-body row gx-4 my-5" >
                    <div className="col-md-4 ">
                        <h2><i className="fab fa-edge-legacy"></i>-learner</h2>
                        <p className='mt-4'>We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist.</p>
                    </div>
                    <div className="col-md-4 ps-5 ">
                        <h4>Contacts</h4>
                        <p className='mt-4'>Mon – Fri: 8.00am 6.00pm</p>
                        <p>112 W 34th St,Chittagong</p>
                        <p>(+1) 212-946-3434</p>
                        <p className='secondary-color'>info@e-learner.com</p>

                    </div>
                    <div className="col-md-4 ">
                        <h4 className='text-center'>Campus Life</h4>
                        <div className='d-flex justify-content-between align-items-center px-5'>
                            <div className="services ">
                                <a href="">Courses</a>
                                <a href="">Training</a>
                                <a href="">Careers</a>
                                <a href="">Pricing</a>
                            </div>
                            <div className="versities">
                                <a href="Universities"></a>
                                <a href="">Institutions</a>
                                <a href="">Havard</a>
                                <a href="">Stanford</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
