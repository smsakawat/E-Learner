import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div className='error-container d-flex justify-content-center align-items-center'>
            <div >
                <h1 className='error-code text-light'> 404</h1>
                <h2 className='error-title text-light'>PAGT NOT FOUND</h2>
                <p className='leadv secondary-color'>Sorry we couldn't find the page you are looking for.</p>

                <Link to='/home'>
                    <button className='btn btn-success'><i class="fas fa-arrow-left me-2 text-light"></i>Back to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Error;
