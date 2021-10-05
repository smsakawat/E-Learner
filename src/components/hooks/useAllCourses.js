import { useEffect, useState } from "react";

const useAllCourses = () => {
    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch('/allcourses.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    return allCourses;
}

export default useAllCourses;