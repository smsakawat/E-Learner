import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './Category.css';

const Category = ({ category, addToCart }) => {
    const { img, subject, rating, title, description, payment, lessons, students, id } = category || {};


    return (

        <div className='row gx-3 pt-3 px-2 category-card my-3 pb-2'>
            <div className="category-img-div col-md-3 "><Card.Img src={img} className=' img-fluid category-img' /> </div>
            <div className="course-details text-start col-md-9">
                <h6 className="fw-bold">{title}</h6>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className="text-secondary">Category: <span className="text-primary fw-bold ms-1">{subject}</span></p>
                    <p className="text-secondary">Lectures: <span className="text-dark fw-bold ms-1">{lessons}</span></p>
                    <p className="text-secondary">Students: <span className="text-dark fw-bold ms-1">{students}</span></p>

                </div>
                <p className="fw-bold">{rating} <Rating

                    initialRating={rating}
                    readonly
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"

                /></p>
                <p className='text-secondary'>{description}</p>
                <div className="d-flex align-items-center">
                    <div className='footer-item pe-3'><button onClick={() => addToCart(id)} className='cart-btn'><i className="fas fa-cart-plus me-2"></i>Add To Cart</button></div>
                    <div className='footer-item pe-3 mt-1'><p className="text-primary fw-bold mx-4  ">${payment}</p></div>
                    <div className='ms-4'> <a href=""> <i className="far fa-bookmark text-primary"></i></a></div>
                </div>
            </div>
        </div>

    )
}

export default Category;
