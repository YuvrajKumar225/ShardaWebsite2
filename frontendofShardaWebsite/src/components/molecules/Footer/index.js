import React from "react";
// import logoMSN from "../../../assets/images/MSN-PRODUCTION-LOGO.png";
import { Link } from 'react-router-dom'
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ButtonWa } from "../../../components";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 sm:px-6 md:px-8 lg:px-0">
         
         
          <div>
            <Link to='/'>
              {/* <img src={logoMSN} alt="MSN PRODUCTION" className="w-32 mb-4" /> */}
            </Link>
            <h1 className="xl font-bold mb-4">SHARADA PRODUCTION</h1>
            <p className="text-gray-400 mb-4 paddingLeft:10px">
          Flat no. 502, 5th floor, <br />
          Trimurti Heights, Ambegaon Budruk, Pune <br />
          Maharashtra 411046
            </p>
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="mr-4 text-gray-400"></FaPhoneAlt>
              <p className="text-gray-400">+91 821 256 63 56</p>
            </div>
            <div className="flex items-center">
              <MdEmail className="mr-4 text-gray-400"></MdEmail>
              <p className="text-gray-400">info@msnproduction.com</p>
            </div>
          </div>

          {/* Links */}
          <div>





            <span className="font-bold text-lg mb-4 block">Links</span>
            <Link
              to="/"
              className="block mb-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>


            <Link
              to="/aboutus"
              className="block mb-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
           About
            </Link>


            <Link
              to="/paket"
              className="block mb-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              Services
            </Link>


            <Link
              to="/contact"
              className="block mb-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
             Contact
            </Link>



            <Link
              to="/career"
              className="block mb-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              Career
            </Link>


            
            
            
            <Link
              to="/blog"
              className="block mb-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              Blog
            </Link>
          </div>

          {/* Focus & Services */}
          <div className="md:col-span-2 lg:col-span-1">
            <span className="font-bold text-lg mb-4 block">Popular Services</span>
            <Link
              to="/paket"
              className="block mb-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
             Website Development
            </Link>
            <Link
              to="/paket"
              className="block mb-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
             Software Development
            </Link>
            <Link
              to="/aboutus"
              className="block mb-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              Mobile Development
            </Link>
            <Link
              to="/paket"
              className="block mb-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              Media Management
            </Link>
            <Link
              to="/paket"
              className="block mb-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              Branding & Content Creative
            </Link>
            <Link
              to="/paket"
              className="block mb-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              Digital Marketing & Advertising
            </Link>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Follow Us</span>
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com"
                target="blank"
                className="text-2xl text-gray-400 hover:text-white mr-4 transition-colors duration-300"
              >
                <FaLinkedin></FaLinkedin>
              </a>
              <a
                href="https://web.facebook.com"
                target="blank"
                className="text-2xl text-gray-400 hover:text-white mr-4 transition-colors duration-300"
              >
                <FaFacebookSquare></FaFacebookSquare>
              </a>
              <a
                href="https://twitter.com"
                target="blank"
                className="text-2xl text-gray-400 hover:text-white mr-4 transition-colors duration-300"
              >
                <FaTwitterSquare></FaTwitterSquare>
              </a>
              <a
                href="https://www.instagram.com"
                target="blank"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-gray-900 text-gray-400 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between px-6 sm:px-6 md:px-8 lg:px-0">
          <p>&copy; Copyright 2024,     Sharda Production    -    All Rights Reserved</p>
        </div>
      </footer>

      <ButtonWa />
    </div>
  );
};

export default Footer;
