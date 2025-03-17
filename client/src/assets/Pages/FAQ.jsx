import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import './FAQ.css'

const FAQ = () => {
  // State to track which question is currently active
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Toggle function to open/close the question
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  const questions = [
    {
      question: "What services does NovoNest offer?",
      answer:
        "NovoNest offers a variety of real estate services tailored to your needs. These include virtual tours of properties, personalized property recommendations based on your preferences, expert legal assistance for all property transactions, and market analysis to help you make informed decisions. Our goal is to make your home-buying or selling journey smooth and stress-free.",
    },
    {
      question: "How can I schedule a virtual tour?",
      answer:
        "Scheduling a virtual tour is simple. Visit our website and browse the available properties. Once you find a property you’re interested in, click the 'Schedule Virtual Tour' option on the property details page. Choose a date and time that suits you, and our team will arrange the tour for you. You’ll receive a confirmation email with the details of your scheduled session.",
    },
    {
      question: "Is there a fee for using NovoNest?",
      answer:
        "Browsing properties on NovoNest is completely free. However, some premium services, such as legal consultations or personalized market analysis reports, may incur additional charges. Our team will always be transparent about any costs, and you can contact our support team for detailed information on pricing.",
    },
    {
      question: "How does NovoNest ensure the accuracy of property listings?",
      answer:
        "At NovoNest, we prioritize accuracy and reliability. We verify each property listing by working closely with property owners, real estate agents, and our in-house team of experts. Additionally, we update our database regularly to ensure that the information displayed on our platform reflects the latest market trends and availability.",
    },
 
  ];
  const regulaQuestions = [
       {
      question: "Can I get assistance with legal paperwork for buying a property?",
      answer:
        "Absolutely! NovoNest provides professional legal assistance to help you navigate the complexities of real estate transactions. Our legal experts will guide you through reviewing contracts, verifying property documents, and handling registration processes. This ensures your transaction is secure and hassle-free.",
    },
    {
      question: "Does NovoNest offer services for sellers as well?",
      answer:
        "Yes, NovoNest caters to both buyers and sellers. If you're selling a property, we can help you list your property on our platform, create appealing virtual tours, and connect you with potential buyers. Our team will also assist with pricing strategies and negotiations to help you get the best deal.",
    },
    {
      question: "What should I do if I need help during my property search?",
      answer:
        "If you require assistance at any stage of your property search, our dedicated customer support team is here for you. You can reach out via live chat on our website, send us an email, or call our hotline. We’re committed to providing you with personalized support to address any queries or challenges.",
    },
    {
      question: "Are virtual tours available for all listed properties?",
      answer:
        "We strive to offer virtual tours for as many properties as possible. Most of the properties on our platform are equipped with this feature to give you an immersive experience. However, if a property doesn't currently have a virtual tour available, our team will work to provide additional details or arrange an in-person visit if needed.",
    },

  ]

  return (
 <>
  <div className=' FAQ-container pt-24 pb-24'>
    <h1 className="text-4xl font-extrabold mb-4 text-center">FAQ</h1>
    </div>
 <div className="py-24 px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
 <div>
  <h1 className="font-bold text-4xl mb-4 text-blue-800">Frequently Asked Questions</h1>
  <p className="text-gray-700 text-lg mb-6">
    Curious about something? We've got you covered! Browse through our Frequently Asked Questions to find quick and clear answers to common queries. We're here to make things easy for you.
  </p>
  <div>
  <Link to="/Contact">
      <button className="px-6 py-2 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
        Contact Us
      </button>
    </Link>
  </div>
</div>

 <div className="faq-section">
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question flex justify-between items-center bg-gray-200 p-4 rounded-md cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <h3 className="text-lg font-medium">{item.question}</h3>
            <span className="text-xl">
              {activeQuestion === index ? "−" : "+"} {/* Icon changes */}
            </span>
          </div>
          {activeQuestion === index && (
            <div className="faq-answer bg-gray-100 p-4 mt-2 rounded-md">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
 </div>
 {/* reqular questions */}
<div className="py-12 bg-gray-50">
    <h1 className="text-center font-bold text-3xl text-gray-600 mb-12">Regular Questions</h1>
<div className="faq-section">
      {regulaQuestions.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question flex justify-between items-center bg-gray-200 p-4 rounded-md cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <h3 className="text-lg font-medium">{item.question}</h3>
            <span className="text-xl">
              {activeQuestion === index ? "−" : "+"} {/* Icon changes */}
            </span>
          </div>
          {activeQuestion === index && (
            <div className="faq-answer bg-gray-100 p-4 mt-2 rounded-md">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
</div>

<div>
<div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
  <h1 className="font-bold text-3xl mb-4 text-blue-800">Ask Us Anything</h1>
  <p className="text-gray-700 text-lg mb-6">
    We're here to make your experience seamless <br /> and hassle-free. Have a question or need assistance? Don’t hesitate <br /> to reach out to us through any of the channels below. Your satisfaction is our top priority!
  </p>
  <ul className="mt-4 space-y-4">
    <li className="flex items-center justify-center text-gray-600">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-800" />
      123 Modern Lane, Nairobi, Kenya
    </li>
    <li className="flex items-center justify-center text-gray-600">
      <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-800" />
      +254 700 123 456
    </li>
    <li className="flex items-center justify-center text-gray-600">
      <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-800" />
      info@novonest.com
    </li>
  </ul>
</div>

    <div>
        
    </div>
</div>
 </>
  );
};

export default FAQ;
