import React from 'react';
import CartSingleCourse from '../CartSingleCourse/CartSingleCourse';
import SummaryCard from '../SummaryCard/SummaryCard';
import './Cart.css';

const Cart = ({ cart }) => {

    return (
        <div className='cart-container  my-5 p-5'>

            <div className='details-container' >
                {
                    cart?.map(course => <CartSingleCourse
                        key={course.id}

                        course={course}
                    ></CartSingleCourse>)
                }
            </div>

            <div className='summary-container'>

                <SummaryCard
                    cart={cart}
                // handleBuy={handleBuy}
                ></SummaryCard>
            </div>
        </div>

    )
}

export default Cart;
