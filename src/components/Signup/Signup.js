import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Signup.css';

const Signup = () => {
    return (
        <div className='d-flex justify-content-center align-items-center my-5 py-5'>
            <div className='signup-form text-start my-4'>
                <Form>
                    <h4 className='fw-bold py-2 mb-3'>Register</h4>
                    <Row className='my-3'>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className="d-flex justify-content-center align-items-center">
                        <button className='submit-btn'>Register</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Signup;
