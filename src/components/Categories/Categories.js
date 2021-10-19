import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Category from './Category/Category';


const Categories = ({ addToCart }) => {
    const { category } = useParams();


    const [selectedCategories, setSelectedCategories] = useState([]);

    const [allcourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch('/allcourses.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])

    useEffect(() => {
        const newCategory = allcourses?.filter(course => course.subject.toLowerCase().includes(category));
        setSelectedCategories(newCategory)

    }, [allcourses, category])



    return (
        <div className="container my-5">
            <div className='row my-5  py-5'>
                {
                    selectedCategories.map(cg => <Category
                        key={cg.id}
                        category={cg}
                        addToCart={addToCart}
                    ></Category>)
                }


            </div>
        </div>
    )
}

export default Categories;
