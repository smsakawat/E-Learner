import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './Category.css';

const Category = ({ category }) => {
    const { img, subject, rating, title, description, payment, lessons, students } = category || {};
    return (

        <div className=' col-md-6   category-card text-start '>
            <Card className='h-100'>
                <div className="img-div"><Card.Img variant="top" src={img} /> <div className='overlay'></div></div>

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

export default Category;
