import React from "react";
import './Testimonial.css'

const TestimonialCard = ({ image, name, text }) => {
  return (
    <div className="testimonial-card">
      <img
        src={image}
        alt={`${name}'s picture`}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-blue-800">{name}</h3>
      <p className="text-sm text-gray-600 mt-2 italic">{text}</p>
    </div>
  );
};

export default TestimonialCard;
