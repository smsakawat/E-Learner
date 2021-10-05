import React from 'react';
import './SummaryCard.css';


const SummaryCard = ({ cart }) => {

    return (
        <div className='total-container p-4 text-start'>

            <h4 className="fw-bold">Order Summary</h4>
            <hr className='px-2 text-secondary' />
            <div className=" text-secondary d-flex justify-content-between align-items-center fw-bold">
                <span>Course Fee:</span>
                <span>$00</span>
            </div>
            <hr className='px-2 text-secondary ' />
            <div className='text-secondary d-flex justify-content-between align-items-center fw-bold'>
                <span>Handling Fee:</span>
                <span>$00</span>
            </div>
            <hr className='px-2 text-secondary' />
            <div className=' text-dark d-flex justify-content-between align-items-center'>
                <h4 className='fw-bold'>Total:</h4>
                <h4 className='fw-bold'>$00</h4>
            </div>
        </div>
    )
}

export default SummaryCard;
