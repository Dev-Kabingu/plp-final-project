import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import logo from '../../assets/images/logo.jpg';


const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white p-8">
   
      <div className="footer-title mb-8 text-center">
        <h2 className="text-2xl font-bold">NovoNest Homes</h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Discover your dream home with us. Exceptional locations, modern designs, and a commitment to excellence.
        </p>
      </div>

      <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-3 m-12">
       
        <div className="quick-links">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Properties</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
          </ul>
        </div>

        <div className="contact-details">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              123 Modern Lane, Nairobi, Kenya
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +254 700 123 456
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              info@novonest.com
            </li>
          </ul>
        </div>

        <div className="information">
          <h3 className="text-lg font-semibold">Information</h3>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            <li className="hover:text-gray-300 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-gray-300 cursor-pointer">Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="social-icons mt-8 text-center">
        <h3 className="text-lg font-semibold">Follow Us</h3>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>

      <div className="footer-bottom text-center text-gray-500 mt-8">
        <p>© 2025 Modern Homes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
