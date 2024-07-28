import React from "react";
import {
  FaLinkedin,
  FaSkype,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks } from "../constants";

const supportContacts = [
  {
    name: "Emma",
    platform: "Telegram",
    handle: "@tannie5",
    link: "https://t.me/tannie5",
    icon: <FaTelegramPlane className="text-blue-500" />,
  },
  {
    name: "Kasahun",
    platform: "Skype",
    handle: "live:.cid.749809ce3ea2853c",
    link: "skype:live:.cid.749809ce3ea2853c?chat",
    icon: <FaSkype className="text-blue-500" />,
  },
  {
    name: "Support",
    platform: "WhatsApp",
    handle: "+251973381833",
    link: "https://wa.me/251973381833",
    icon: <FaWhatsapp className="text-green-500" />,
  },
];

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="flex items-center gap-2">
            <img src={footerLogo} alt="logo" width={30} height={29} />
            <span className="font-montserrat text-2xl bg-gradient-to-r from-white-400 to-white bg-clip-text text-transparent">
              ALL CORNERS
            </span>
          </a>
          <p className="leading-7 mt-6 text-base font-montserrat text-white-400 sm:max-w-sm">
            Get ready for any occasion with our All Corner services. Find the
            perfect solution for your needs.
          </p>
          <div className="flex items-center mt-8 gap-5">
            {supportContacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                aria-label={contact.platform}
              >
                {contact.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat font-bold text-lg">
                {section.title}
              </h4>
              <div className="flex flex-col gap-2 mt-5">
                {section.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="text-white-400 font-montserrat text-base"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm: items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & conditions</p>
      </div>

      <div className="flex justify-center items-center text-white-400 mt-10">
        <h4 className="font-semibold">Developed by</h4>
        <a
          href="https://www.linkedin.com/in/getahun-honelet-a63998186/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-montserrat"
        >
          <span className="font-semibold  ml-2">Getahun Honelet</span>
          <FaLinkedin className="text-2xl text-white  ml-2" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
