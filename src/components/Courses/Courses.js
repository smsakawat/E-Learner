import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='courses-container  py-5'>
            <div className="container py-3">
                <div className=" py-3 d-flex justify-content-between align-items-center">
                    <h1>What do you want to learn today?</h1>
                    <Link to='/allcourses' className='course-link'>View All Courses<i className="bi bi-arrow-right-short ms-2"></i> </Link>
                </div>
                <div className='row py-5 g-4 '>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Courses;
