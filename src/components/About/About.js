import React from 'react';
import img from '../../images/about-pic.jpg';
import './About.css';

const About = () => {
    return (
        <>
            <div className='about-header '>
                <div className='about-title'>
                    <h4>Know Us Better</h4>
                    <h2 className='fw-bolder mt-2'>About Us</h2>
                </div>
            </div>
            <div className="about-body container my-5">

                <h2 className='about-title text-center mb-5 fw-bold'><i className="fab fa-edge-legacy"></i>-learner's History</h2>

                <div className='row '>
                    <div className="col-md-6 about-img">
                        <img src={img} className='img-fluid' alt="" />
                    </div>

                    <small className=' text=secondary col-md-6'>If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicant’s application, academic and personal, to select students who suit to our community with a full range of backgrounds.Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</small>
                </div>

            </div>
        </>
    )
}

export default About;
