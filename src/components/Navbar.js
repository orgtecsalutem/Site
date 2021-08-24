import { useState } from "react";
import { Link } from "react-router-dom";

import { BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";

import { navLinks } from "../utils/links";

import logo from "../assets/images/logo.png";

export function Navbar() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function setIsDropdownTrue() {
    setIsDropdown(true);
  }

  function setIsDropdownFalse() {
    setIsDropdown(false);
  }

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  const social = [
    {
      url: "https://facebook.com/Techsa-110788137918970/",
      name: "Facebook",
      icon: <FaFacebook />,
    },
    {
      url: "https://www.instagram.com/techsabrasil/",
      name: "Instagram",
      icon: <FaInstagram />,
    },
    {
      url: "https://twitter.com/techsabrasil",
      name: "Twitter",
      icon: <FaTwitter />,
    },
  ];

  return (
    <nav className="main-nav">
      <h1 className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </h1>

      <ul className={`nav-ul ${isOpen && "active"}`}>
        {navLinks.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.route}>{item.name}</Link>
            </li>
          );
        })}

        <li
          className="contact"
          onMouseOver={setIsDropdownTrue}
          onMouseLeave={setIsDropdownFalse}
        >
          <a
            href="https://linkfly.to/30805HhO689"
            target="_blank"
            rel="noreferrer"
          >
            <span>CONTATO</span>
            {isDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </a>
          <ul className={`social ${isDropdown && "visible"}`}>
            {social.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </li>

        <li className="join">
          <button className="join-button">
            <Link to="/">
              <span>INTEGRAR-SE</span>
              <BsArrowRightShort />
            </Link>
          </button>
        </li>
      </ul>

      <HiMenuAlt2 className="hamburger" onClick={handleIsOpen} />
    </nav>
  );
}
