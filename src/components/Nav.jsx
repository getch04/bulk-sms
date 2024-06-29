import React, { useState } from "react";
import { close, hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuItemClick = () => {
    setMenuVisible(false);
  };

  return (
    <header className="fixed padding-x py-8 z-[11] w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              <a
                href={item.href}
                className="font-montserrat text-sm text-gray-500 hover:text-gray-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={handleMenuToggle}
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
