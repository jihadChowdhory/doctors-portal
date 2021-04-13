import React from "react";
import "./Testimonial.css";

const Testimonial = (props) => {
  const { quote, name, from, img } = props.testimonial;
  return (
    <div className="test-container shadow-sm col-md-4 p-5">
      <p className="text-center">{quote}</p>
      <div className="testimonial-card-details">
        <img src={img} alt="" />
        <h5 className="text-primary">{name}</h5>
        <small>{from}</small>
      </div>
    </div>
  );
};

export default Testimonial;
