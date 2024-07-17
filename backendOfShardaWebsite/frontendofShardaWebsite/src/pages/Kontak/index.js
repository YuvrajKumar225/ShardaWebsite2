import React, { useEffect, useRef, useState } from "react";
import "./Kontak.css";
import "../shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import { FaClock, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { headingAnimation, kontakAnimation } from "../../hooks/useAnimation";
import { BottomLine, Map } from "../../components";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.post("http://localhost:3001/send-email", data);
      console.log(response.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Message has been sent successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to send message",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    e.target.reset();
  };

  return (
    <div className="py-16 parent bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
          className="text-center mb-12"
        >
          <h3 className="mt-16 text-accent text-2xl font-semibold">Contact</h3>
          <h1 className="text-4xl font-bold text-primary drop-shadow-md">
            Contact <span className="text-accent">Us</span>
          </h1>
          <BottomLine />
          <h2 className="py-5 text-gray-700 text-lg">
            Don't hesitate to contact us anytime. You can get a free consultation with our great team who are ready to help you create a website and grow your company's business.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-20 mt-8 md:grid-cols-2">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            ref={ref}
            initial="hidden"
            animate={viewDiv && "visible"}
            variants={kontakAnimation}
          >
            <form ref={form} onSubmit={handleSend}>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                <input
                  className="input-field mb-4 lg:mb-0"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
                <input
                  className="input-field"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <input
                className="input-field mt-4"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
              <textarea
                className="input-field mt-4"
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                value="Send Message"
                className="primary-button mt-4"
              >
                <span>Send</span>
                <span>
                  <MdSend />
                </span>
              </button>
            </form>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={viewDiv && "visible"}
            variants={kontakAnimation}
          >
            <div className="flex items-center mb-6">
              <FaPhoneAlt className="mr-4 text-2xl text-primary"></FaPhoneAlt>
              <h3 className="font-semibold text-gray-700">[Phone] +91 93738 47083</h3>
            </div>
            <div className="flex items-center mb-6">
              <MdEmail className="mr-4 text-2xl text-primary"></MdEmail>
              <h3 className="font-semibold text-gray-700">[Email] shardaprodtech@gmail.com</h3>
            </div>
            <div className="flex items-center mb-6">
              <FaClock className="mr-4 text-2xl text-primary"></FaClock>
              <h3 className="font-semibold text-gray-700">[Working Hours] Monday – Saturday, 10:00 – 18:00</h3>
            </div>
            <div className="flex items-center mb-6">
              <FaLocationArrow className="mr-4 text-2xl text-primary"></FaLocationArrow>
              <h3 className="font-semibold text-gray-700">[Location] Pune, Maharashtra, 411041</h3>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
          className="mt-16"
        >
          <div className="bg-gray-200 p-8 rounded-lg shadow-md">
            <Map />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
