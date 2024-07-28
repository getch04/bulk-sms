import React, { useEffect, useState } from "react";
import { close, hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuItemClick = () => {
    setMenuVisible(false);
  };

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed padding-x py-8 z-[11] w-full transition-colors duration-300 ${
        isScrolled ? "bg-white" : ""
      }`}
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex items-center gap-2">
          <img src={headerLogo} alt="logo" width={30} height={29} />
          <span className="font-montserrat text-2xl bg-gradient-to-r from-red-800 to-orange-500 bg-clip-text text-transparent">
            ALL CORNERS
          </span>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => (
            <li
              key={`${item.label}-${index}`}
              onMouseEnter={item.label === "About Us" ? handleMouseEnter : null}
              onMouseLeave={item.label === "About Us" ? handleMouseLeave : null}
              className="relative"
            >
              <a
                href={item.href}
                className="font-montserrat text-sm text-gray-500 hover:text-gray-900 pb-5"
              >
                {item.label}
              </a>
              {item.label === "About Us" && isDropdownVisible && (
                <ul
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <li key={"about"}>
                    <a
                      href="/about-us"
                      className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900"
                    >
                      About Us
                    </a>
                  </li>
                  <li key={"faqs"}>
                    <a
                      href="/faqs"
                      className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900"
                    >
                      FAQs
                    </a>
                  </li>
                  <li key={"how it works"}>
                    <a
                      href="/how-it-works"
                      className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900"
                    >
                      How It Works
                    </a>
                  </li>
                  <li key={"privacy policy"}>
                    <a
                      href="/privacy-policy"
                      className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li key={"payment policy"}>
                    <a
                      href="/payment-policy"
                      className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900"
                    >
                      Payment Policy
                    </a>
                  </li>
                </ul>
              )}
            </li>
          ))}
          <div className="rounded-full border-2 border-gray-200 py-2 px-4">
            <li key="login/signup">
              <a
                href="/contact-us"
                className="font-montserrat text-sm text-gray-500 hover:text-gray-900"
              >
                Contact Us
              </a>
            </li>
          </div>
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={handleMenuToggle}
            className="cursor-pointer"
          />
        </div>
      </nav>
      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-white transition-transform duration-300 transform ${
          menuVisible ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-end m-10">
          <img
            src={close}
            alt="close"
            width={25}
            height={25}
            onClick={handleMenuToggle}
            className="cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center justify-center h-full gap-4">
          {navLinks.map((item, index) => (
            <li key={`${item.label}-${index}`} className="w-full text-center">
              <a
                href={item.href}
                className="font-montserrat text-lg text-gray-500 hover:text-gray-900 w-full block"
                onClick={handleMenuItemClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
