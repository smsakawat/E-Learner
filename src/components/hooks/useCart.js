import { useEffect, useState } from "react";
import { getStoredData } from '../LocalDb/LocalDb';



const useCart = (allcourses) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (allcourses?.length) {
            const savedCourses = getStoredData();
            const selectedCourses = [];
            for (const id in savedCourses) {
                const addedCourse = allcourses.find(course => course.id === id)
                if (addedCourse) {
                    const quantity = savedCourses[id];
                    addedCourse.quantity = quantity;
                    selectedCourses.push(addedCourse);


                }

            }
            setCart(selectedCourses);
        }


    }, [allcourses])
    // same function takhe ki duibar return hocce??
    return [cart, setCart];

}
export default useCart;