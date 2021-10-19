import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <div className='  form-container mt-5 pt-5 text-center text-light'>

            <h3>Get started with <i className="fab fa-edge-legacy fs-3 mt-2 mb-1 "></i>-learner today </h3>
            <div className='mt-3  d-flex justify-content-center align-items-center'>

                <div>
                    <div className='row  signup-container'>
                        <div className='col-md-4 social-container py-5 px-5'>
                            <h2 className=' text-start'><i className="fab fa-edge-legacy mt-5 mb-3"></i>-learner</h2>
                            <p className='text-start' >login using social media to get quick access</p>
                            <div className='text-start mb-3'>
                                <button className='btn btn-primary active my-2'><i className="fab fa-facebook-f me-1"></i><small>Signin with facebook</small></button>
                                <button className='btn btn-info  my-2 text-light'><i className="fab fa-twitter text-light me-1 text-light"></i><small>Signin with twitter</small></button>
                                <button className='btn btn-danger my-2'><i className="fab fa-google-plus-square text-light me-1"></i><small>Signin with google</small></button>
                            </div>

                        </div>
                        <div className='col-md-8 text-center p-4 input-container'>
                            <h2 className='primary-color my-4 fw-bolder '>Sign up for free!</h2>
                            <div><input className='input-field' type="text" placeholder='Email' /></div>
                            <div><input className='input-field' type="text" name="name" placeholder='Full Name' /></div>
                            <div> <input className='input-field' type="password" id="password" placeholder='password' /></div>


                            <div className='d-flex justify-content-center' ><button className='submit-btn'>Sign up with email</button></div>
                            <div className='my-2'> <small ><a href="">Already have an account?</a></small></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
