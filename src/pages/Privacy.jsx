import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const Privacy = () => {
  return (
    <section id="privacy-policy" className="flex flex-col items-center py-28">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-96 px-80 max-lg:px-5">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center px-4 text-center">
            <FaShieldAlt className="text-8xl text-white mb-4" />
            <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
            <p className="text-lg text-white mt-4">
              Your privacy is important to us. This privacy policy explains how
              All Corners ensures your data privacy and what types of
              information we do and do not collect.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 px-4">
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4  font-montserrat">
            1. Introduction
          </h3>
          <p className="text-lg text-gray-700">
            Welcome to All Corners. We respect your privacy and are committed to
            protecting it. This privacy policy will inform you about how we
            protect your data and your privacy rights.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4   font-montserrat">
            2. Important Information
          </h3>
          <p className="text-lg text-gray-700">
            All Corners is committed to protecting your privacy. This document
            outlines what information we do not collect and how we ensure your
            data privacy.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4   font-montserrat">
            3. Information We Do Not Collect
          </h3>
          <p className="text-lg text-gray-700">
            We do not collect any personal data from our users. Specifically:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>
              We do not collect your name, email address, phone number, or any
              other personal identifiers.
            </li>
            <li>
              We do not track your browsing history or usage data on our site.
            </li>
            <li>
              We do not use cookies or other tracking technologies to collect
              information about you.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4   font-montserrat">
            4. How We Protect Your Privacy
          </h3>
          <p className="text-lg text-gray-700">
            We take the following measures to ensure your privacy:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>
              We ensure our website is secure and use encryption to protect your
              data.
            </li>
            <li>We do not share your data with third parties.</li>
            <li>
              We regularly review our privacy practices to ensure your data is
              protected.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4   font-montserrat">
            5. Contact Us
          </h3>
          <p className="text-lg text-gray-700">
            If you have any questions about this privacy policy or our privacy
            practices, please contact us at:
          </p>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> support@allcorners.com
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> +251 97 338 1833
          </p>
        </section>
      </div>
    </section>
  );
};

export default Privacy;
