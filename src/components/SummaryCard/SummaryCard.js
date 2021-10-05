import React from 'react';
import './SummaryCard.css';


const SummaryCard = ({ cart }) => {

    let courseTotal = 0;
    let grandTotal = 0;
    let handlingFee = 0;

    for (const course of cart) {
        const courseFee = parseInt(course.payment);
        courseTotal = courseTotal + courseFee;
        handlingFee = courseTotal > 0 ? 20 : 0;
        grandTotal = courseTotal + handlingFee;

    }



    return (
        <div className='total-container p-4 text-start'>

            <h4 className="fw-bold">Order Summary</h4>
            <hr className='px-2 text-secondary' />
            <div className=" text-secondary d-flex justify-content-between align-items-center fw-bold">
                <span>Total Courses:</span>
                <span>{cart.length}</span>
            </div>
            <hr className='px-2 text-secondary' />
            <div className=" text-secondary d-flex justify-content-between align-items-center fw-bold">
                <span>Course Fee:</span>
                <span>${courseTotal}</span>
            </div>
            <hr className='px-2 text-secondary ' />
            <div className='text-secondary d-flex justify-content-between align-items-center fw-bold'>
                <span>Handling Fee:</span>
                <span>${handlingFee}</span>
            </div>
            <hr className='px-2 text-secondary' />
            <div className=' text-dark d-flex justify-content-between align-items-center'>
                <h4 className='fw-bold'>Total:</h4>
                <h4 className='fw-bold'>${grandTotal}</h4>
            </div>
        </div>
    )
}

export default SummaryCard;
