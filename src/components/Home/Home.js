import React from 'react';
import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='home-container d-flex align-items-center text-light mt-4' >
                <div className='container  text-start pb-5'>
                    <h1 className='title'>Learn From The Best.</h1>
                    <h1 className='title'>Learn  On Your Schedule.</h1>
                    <p className='lead mt-3'>Discover thousands of online courses from top universities in the world.</p>
                    <p className='lead'>Anywhere,anytime.Enjoy risk-free with our 30-day moneyback gurantee</p>
                    <div className='d-flex align-items-center'>
                        <div className="button my-4 me-4"><a href='#' type='button' className='signup-btn'>Sign Up</a>
                        </div>
                        <Link to='/about' className='link home-link ms-5'>How it works<i class="fas fa-arrow-right secondary-color ms-2"></i></Link>
                    </div>
                </div>
            </div >
            <Courses></Courses>
        </>
    )
}

export default Home;
