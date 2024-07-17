import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import bannerImg from "../../../assets/images/banner-msn-production.svg";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";
import "./banner.css";

const Banner = () => {
  return (
    <div className="parent min-h-[100vh] flex flex-col lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="px-4 sm:px-8 md:px-12 lg:px-0 order-1"
      >
        <h1 className="mb-0 text-3xl sm:text-4xl font-bold text-center lg:text-left text-gray-800 uppercase tracking-wide mt-16">
          SHARDA PRODUCTION
        </h1>
        <h2 className="my-8 text-xl sm:text-2xl font-bold text-primary">
          Digital & Creativity to Realize Your Business Vision!
        </h2>
        <div className="max-w-md mb-12 bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg font-medium text-gray-700">
            SHARDA PRODUCTION is a company providing services for Website Development, Mobile Applications, Branding &
            Creative Content, and Internet Marketing & Advertising tailored to your business needs at affordable prices
            with luxurious quality.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center mb-20">
          <a href="https://wa.me/919373847083" target="blank" className="mb-4 sm:mb-0">
            <button className="primary-button">
              <span className="text-base sm:text-button-mobile">Free Consultation</span>
              <span>
                <FaAngleRight />
              </span>
            </button>
          </a>
          {/* <Link to="/packages" className="ml-0 sm:ml-4">
            <SecondaryBtn>
              <span className="text-button-mobile">See Offers</span>
              <span>
                <FaAngleRight />
              </span>
            </SecondaryBtn>
          </Link> */}
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 order-2 lg:order-1"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="pt-10 lg:pt-0 md:pt-0 sm:pt-0 relative lg:ml-10">
          <div className="image-container">
            <img src={bannerImg} alt="Banner SHARDA PRODUCTION" className="image-animation" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
