import React from 'react';
import CartSingleCourse from '../CartSingleCourse/CartSingleCourse';
import useAllCourses from '../hooks/useAllCourses';
import useCart from '../hooks/useCart';
import { clearCourses, deleteFromLocal } from '../LocalDb/LocalDb';
import SummaryCard from '../SummaryCard/SummaryCard';
import './Cart.css';

const Cart = () => {
    const allCourses = useAllCourses();
    const [cart, setCart] = useCart(allCourses);



    const handleBuy = () => {
        setCart([])
        clearCourses();
    }

    const handleRemove = (id) => {
        const remainingCourses = cart.filter(course => course.id !== id);
        setCart(remainingCourses);
        deleteFromLocal(id);
    }

    return (
        <div className='cart-container  my-5 p-5'>

            <div className='details-container' >
                {
                    cart?.map(course => <CartSingleCourse
                        key={course.id}
                        handleRemove={handleRemove}
                        course={course}
                    ></CartSingleCourse>)
                }
            </div>

            <div className='summary-container'>

                <SummaryCard
                    cart={cart}
                    handleBuy={handleBuy}
                ></SummaryCard>
            </div>
        </div>

    )
}

export default Cart;
