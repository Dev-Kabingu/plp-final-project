import React from 'react'
import './Services.css'
import ServiceCard from "../../Components/ServiceCard";
import TestimonialCard from '../../Components/TestimonialCard';
import image1 from '../images/image1.jpg'
import {Link} from 'react-router-dom'


const Services = () => {
  const services = [
    {
      title: "Virtual Home Tours",
      description:
        "Experience the convenience of virtual home tours with our state-of-the-art technology. Walk through properties at your own pace, no matter where you are, and discover every detail that makes each house a perfect fit for you.",
    },
    {
      title: "Financial Consultation",
      description:
        "Our experts provide personalized financial advice to make your home-buying journey stress-free. From budgeting to mortgage options, we help you make informed decisions every step of the way.",
    },
    {
      title: "Property Recommendations",
      description:
        "We analyze your preferences to recommend homes that align perfectly with your lifestyle. Whether it’s a cozy family retreat or a luxurious urban residence, we’ve got you covered.",
    },
    {
      title: "Legal Assistance",
      description:
        "Navigate the complexities of real estate transactions with ease. Our dedicated legal team ensures all paperwork is accurate and compliant, so you can focus on your exciting new chapter.",
    },
    {
      title: "Post-Sale Support",
      description:
        "Our commitment doesn’t end with the sale. Enjoy our post-sale services, including home setup consultations, maintenance referrals, and assistance in making your new house truly feel like home.",
    },
    {
      title: "Eco-Friendly Home Options",
      description:
        "Explore our selection of environmentally sustainable homes. Equipped with energy-efficient features and eco-conscious designs, these properties are perfect for reducing your carbon footprint.",
    },
  ];

  const testimonials = [
    {
      image: image1,
      name: "Jane Doe",
      text: "*NovoNest made my home-buying process smooth and stress-free! The team guided me every step of the way, ensuring all my needs were met.*",
    },
    {
      image: image1,
      name: "John Smith",
      text: "*I loved the virtual tours and personalized recommendations! NovoNest truly understands what buyers are looking for.*",
    },
    {
      image: image1,
      name: "Emily Davis",
      text: ' "The legal assistance was invaluable. Highly recommend NovoNest! They handled all the paperwork seamlessly, making the experience hassle-free." ',
    }
  ];


  return (
    <>
    <div className=' service-container pt-24 pb-24'>
    <h1 className="text-4xl font-extrabold mb-4 text-center">What We Do</h1>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 px-24 py-24'>
      <h1 className='font-bold text-gray-600 text-4xl'>Your Journey to the Perfect Home, Simplified</h1>
      <p>At NovoNest, we take pride in offering a diverse range of services designed to simplify and enhance your home-buying experience. From immersive virtual tours that let you explore properties at your convenience to expert financial consultations that ensure informed decisions, our services are crafted with your needs in mind. Whether you're looking for personalized property recommendations, reliable legal assistance, or eco-friendly home options, we’ve got every step covered. NovoNest is with you, even after the sale, with post-sale support to make your house truly feel like home. Let us be your trusted partner in finding and owning the home of your dreams.</p>
    </div>
 <div className="flex flex-col items-center justify-center pt-24 pb-6 bg-gray-100">
  
  <h3 className="text-2xl font-semibold text-gray-700 mb-3 text-center">End-to-End Home Buying Solutions
  </h3>
  <p className="text-base text-gray-600 leading-relaxed text-center">
    We offer a wide range of services to make your home-buying journey smooth
    and enjoyable. <br />From property tours and financial consultations to
    personalized recommendations, we’re with you every step of the way.
  </p>
</div>
<div className="flex flex-col items-center bg-gray-100 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>

{/* testimonial */}
<div className='testimonial-container text-center py-24'>

  <h4 className='font-bold text-white-600 text-xl'>Testimoinal</h4>
  <h2 className='font-bold text-3xl text-white-600 mb-4'>Client Testimonials</h2>
  <p className='pb-24'>Our clients are at the heart of everything we do, and their words speak <br /> volumes about our commitment to excellence.From seamless experiences to personalized services,<br />  their stories highlight why NovoNest is the trusted choice for so many. Here’s what they have to say!</p>
 

  {/* card */}
  <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            text={testimonial.text}
          />
        ))}
      </div>
    </div>
</div>
{/* frequently asked questions */}
<div class="w-full mx-auto p-12 text-center bg-gray-100">
  <h2 class="text-3xl font-bold text-blue-800 mb-4">Frequently Asked Questions</h2>
  <p class="text-gray-700 text-lg mb-6">
    Have questions? We're here to help! Check out our Frequently Asked Questions <br />for straightforward answers to the things you need to know. Let's simplify things together.
  </p>
  <Link to="/FAQ"><button className="px-6 py-2 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
        Learn More
      </button>
    </Link>
</div>

    </>
  )
}

export default Services
