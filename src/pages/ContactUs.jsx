import React from "react";
import {
  FaPhoneAlt,
  FaSkype,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { Subscribe } from "../sections";

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

function ContactUs() {
  return (
    <section className="py-28 flex flex-col">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-96">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center px-4">
            <FaPhoneAlt className="text-8xl text-white mb-4 " />
            <h2 className="text-3xl font-bold text-white">Contact Us</h2>
            <p className="text-lg text-white mt-4 text-center">
              For all support related issues or to reach our support team,
              please check out the following social links.
            </p>
            <p className="text-lg text-white mt-2 text-center">
              For general company related inquiries, please fill out the form
              below.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 px-4">
        <h3 className="text-2xl font-bold mb-4">Our Social Media</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {supportContacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-2xl mr-3">{contact.icon}</div>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {contact.platform}: {contact.handle}
              </a>
            </div>
          ))}
        </div>
      </div>

      <Subscribe />
    </section>
  );
}

export default ContactUs;
