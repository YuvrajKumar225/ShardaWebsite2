import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../../assets/images/MSN-PRODUCTION-LOGO.png";
import { ImCross } from "react-icons/im";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "../../../utils/Services.js"
import "./Shared.css";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-gray-800");

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/aboutus" },
    { title: "Services", link: "/paket" },
    { title: "Contact", link: "/contact" },
    { title: "Career", link: "/career" },
    { title: "Blog", link: "/blog" },
  ];

  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 700,
      color: isActive ? "#ffffff" : "#ffffff",
    };
  };

  return (
    <nav className={`sticky-nav ${navbarBg} shadow-md z-50`}>
      <div className="flex items-center justify-between w-full px-3 py-4 lg:px-24 max-w-7xl mx-auto">
        <div>
          <Link to="/">
            <img src={logo} alt="SHARDA PRODUCTION Logo" className="h-14" />
          </Link>
        </div>
        <div>
          <ul className="items-center hidden lg:flex">
            {navLinks.map((navItem) => (
              <li className="mx-4" key={navItem.title}>
                <NavLink
                  to={navItem.link}
                  style={activeLink}
                  className="duration-300 hover:text-gray-300 text-lg font-semibold"
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="block lg:hidden">
            <button
              onClick={toggleDrawer}
              className="text-white hover:text-gray-300"
            >
              <FaBars></FaBars>
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              style={{ backgroundColor: "#1a202c" }}
              className="flex flex-col justify-between pb-4 drawer-width" // Add custom class
            >
              <ul className="">
                <li className="mt-6 mb-10 ml-4">
                  <ImCross
                    className="text-white duration-300 cursor-pointer hover:text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                  ></ImCross>
                </li>
                {navLinks.map((navItem) => (
                  <li
                    className="m-4"
                    key={navItem.title}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <NavLink
                      to={navItem.link}
                      style={activeLink}
                      className="flex items-center duration-300 text-white hover:text-gray-300 text-lg font-semibold"
                    >
                      <span className="mr-3">{navItem.icon}</span>
                      <span>{navItem.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}
