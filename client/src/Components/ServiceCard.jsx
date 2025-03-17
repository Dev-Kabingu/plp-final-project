import React from "react";
import './ServiceCard.css'

const ServiceCard = ({ title, description }) => {
  return (
   <div className="">
     <div className=" service-card w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-6 text-center relative overflow-hidden group">
      {/* Sliding Blue Overlay */}
      <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
      
      <div className="relative z-10 group-hover:text-white transition-colors duration-500">
        <h1 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-white">{title}</h1>
        <p className="text-gray-600 leading-relaxed group-hover:text-white">{description}</p>
      </div>
    </div>
   </div>
  );
};

export default ServiceCard;
