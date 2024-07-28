import React from "react";
import { Subscribe } from "../sections";
import { FaTelegramPlane, FaSkype, FaWhatsapp } from "react-icons/fa";

function ContactUs() {
  return (
    <section className="py-28 flex flex-col">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-96">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center mt-8 px-4">
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
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaTelegramPlane className="text-blue-500 text-2xl mr-3" />
            <a
              href="https://t.me/tannie5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Telegram: @tannie5
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaSkype className="text-blue-500 text-2xl mr-3" />
            <a
              href="skype:live:711d0ef9a64fc12?chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Skype: live:711d0ef9a64fc12
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaTelegramPlane className="text-blue-500 text-2xl mr-3" />
            <a
              href="https://t.me/kasahunnigusu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Telegram: @kasahunnigusu
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaSkype className="text-blue-500 text-2xl mr-3" />
            <a
              href="skype:live:.cid.749809ce3ea2853c?chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Skype: live:.cid.749809ce3ea2853c
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaWhatsapp className="text-blue-500 text-2xl mr-3" />
            <a
              href="https://wa.me/251973381833"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              WhatsApp: +251973381833
            </a>
          </div>
        </div>
      </div>

      <Subscribe />
    </section>
  );
}

export default ContactUs;
