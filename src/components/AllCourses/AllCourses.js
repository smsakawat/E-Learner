import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import DetailedSingleCourse from '../DetailedSingleCourse/DetailedSingleCourse';
import './AllCourses.css';

const AllCourses = () => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch('./allcourses.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    return (
        <>
            <div className='allcourses-header'>
                <div className='text-light'><h2 className='fw-bold'>A broad selection of courses</h2>
                    <h4 className='Find Your Suitable One'>Choose from 12,000 online video courses with new additions published every month</h4>
                    <Form.Control className='w-50 mt-4' type="text" placeholder="What do you want to learn?" />
                </div>

            </div>
            <div className="container">
                <div className=" row my-5 gy-5 ">
                    {
                        allCourses.map(course => <DetailedSingleCourse
                            key={course.id}
                            course={course}
                        ></DetailedSingleCourse>)
                    }
                </div>
            </div>
        </>
    )
}

export default AllCourses;
