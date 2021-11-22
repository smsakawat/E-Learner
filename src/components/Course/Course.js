import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import "./Course.css";

const Course = ({ course }) => {
  const { subject, title, payment, rating, img } = course;
  return (
    <div className=" col-md-3  single-course text-start ">
      <Card className="h-100">
        <div className="img-div">
          <Card.Img variant="top" src={img} className="course-img" />{" "}
          <div className="overlay"></div>
        </div>

        <div className="card-body p-4">
          <div className="py-3 course-heading d-flex justify-content-between align-items-center">
            <small className="fw-bold text-primary">{subject}</small>
            <Rating
              initialRating={rating}
              readonly
              emptySymbol="far fa-star text-warning"
              fullSymbol="fas fa-star text-warning"
            />
          </div>
          <h5 className="py-3 fw-bold">{title}</h5>
        </div>

        <Card.Footer className=" px-4 d-flex justify-content-between align-items-center">
          <h5 className="text-primary fw-bold">${payment}</h5>
          <a href="">
            {" "}
            <i className="far fa-bookmark text-primary"></i>
          </a>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Course;
