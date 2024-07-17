import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "../../../utils/Services";
import { FaAngleRight } from "react-icons/fa";
import { headingAnimation, sectionBodyAnimation } from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";
import "./Service.css";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  return (
    <div className="py-16 md:py-20 bg-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 md:mb-16"
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
        >
          <h3 className="text-center text-gray-800 font-semibold text-lg mb-2">Focus & Services</h3>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            <span className="text-primary">Digital & Creative</span> Solutions
          </h1>
          <BottomLine />
          <h2 className="mt-6 text-center text-gray-700 font-medium max-w-3xl mx-auto">
            We focus on providing holistic solutions for your business in building your brand Effectively & Consistently
            through various Digital channels. We will assist you in growing your business to achieve your Company's goals
            more Effectively.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          {Services?.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 duration-300 service-card"
            >
              <div className="mb-6 text-center">
                <span className="inline-block text-5xl text-primary">{service.icon}</span>
              </div>
              <h2 className="mb-4 text-xl font-semibold text-center text-gray-800">{service.title}</h2>
              <div className="text-gray-700 mb-6">
                {service.description.split("\n").map((s, i) => (
                  <p key={i} className="mb-2 text-justify">
                    {s}
                  </p>
                ))}
              </div>
              <div className="flex justify-center">
                <a href="https://wa.me/919373847083" target="blank">
                  <button className="flex items-center gap-3 text-white duration-500 bg-primary border-2 border-primary rounded-md px-4 py-2 hover:bg-transparent hover:text-primary">
                    <span className="text-button-mobile">Contact Us</span>
                    <span>
                      <FaAngleRight />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
