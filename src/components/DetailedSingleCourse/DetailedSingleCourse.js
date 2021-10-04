import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './DetailedSingleCourse.css';

const DetailedSingleCourse = ({ course }) => {
    const { img, rating, subject, title, payment, description, lessons, students } = course;
    return (

        <div className=' col-md-3   text-start course-card '>
            <Card className='h-100'>
                <div className="img-div"><Card.Img variant="top" src={img} className='course-img' /> <div className='overlay'></div></div>

                <div className="card-body p-4">
                    <div className="py-3 course-heading d-flex justify-content-between align-items-center">
                        <small className='fw-bold text-primary'>{subject}</small>
                        <Rating

                            initialRating={rating}
                            readonly
                            emptySymbol="far fa-star text-warning"
                            fullSymbol="fas fa-star text-warning"

                        />
                    </div>
                    <h4 className='py-3 fw-bolder'>{title}</h4>
                    <small className='text-secodary py-1'>{description}</small>
                </div>

                <Card.Footer className=' px-4 '>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='text-primary fw-bold' >{payment}</h5>
                        <a href=""> <i className="fas fa-bookmark text-primary"></i></a>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <p className='text-secondary'><i className="fas fa-book-reader me-2"></i>{lessons}<span className='ms-2'>Lessons</span></p>
                        <p className='text-secondary'><i className="fas fa-user-friends me-2"></i>{students}<span className='ms-2'>Students</span></p>
                    </div>
                </Card.Footer>
            </Card>
        </div>


    )
}

export default DetailedSingleCourse;

// <span className='text-secondary'><i className="fas fa-book-reader me-1"></i>{lessons}<span classNmae='ms-1 me-3'>Lesson</span></span>
//                     <span className='text-secondary'><i className="fas fa-user-friends"></i>{students}<span classNmae='ms-1 me-3'>Lesson</span></span>