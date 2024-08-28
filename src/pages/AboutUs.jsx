import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section id="about-us" className="flex flex-col items-center py-28">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-96 px-80 max-lg:px-5 max-lg:h-auto">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center px-4">
            <FaInfoCircle className="text-8xl text-white mb-4 " />

            <h2 className="text-3xl font-bold text-white">About Us</h2>
            <p className="text-lg text-white mt-4 text-center pb-9">
              All Corners is a premier provider of SMS messaging services,
              offering seamless two-way SMS communication directly from your
              internet-enabled computer. Our robust gateway bridges global
              connections, reaching over 800 mobile network operators worldwide.
              Experience unparalleled messaging quality and reliability with All
              Corners, your trusted partner in global SMS communication.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 px-4">
        <div className="flex flex-row max-lg:flex-col gap-32 max-lg:gap-5">
          <section className="mb-12 text-center">
            <h3 className="font-montserrat text-3xl font-bold mb-4 bg-gradient-to-r from-red-800 to-orange-500 bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 text-start">
              Our mission is to deliver high-quality products that bring joy and
              innovation to our customers' lives. We strive for excellence in
              everything we do, from the design of our products to the service
              we provide.
            </p>
          </section>

          <section className="mb-12 text-center">
            <h3 className="font-montserrat text-3xl font-bold mb-4 bg-gradient-to-r from-red-800 to-orange-500 bg-clip-text text-transparent">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 text-start">
              Our vision is to be a leading provider of innovative solutions
              that empower individuals and businesses worldwide. We aim to
              create a positive impact through our commitment to sustainability
              and community engagement.
            </p>
          </section>
        </div>

        <section className="mb-12">
          <h3 className=" font-montserrat text-3xl font-bold mb-4 bg-gradient-to-r from-red-800 to-orange-500 bg-clip-text text-transparent items-center justify-center text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h4 className="text-xl font-bold" style={{ color: "#1E90FF" }}>
                Emma Allen
              </h4>
              <p className="text-gray-600">Team leader</p>
              <p className="text-gray-600 mt-2 text-center">
                Emma is the driving force behind our team, providing strategic
                direction and inspiring everyone to achieve their best.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h4 className="text-xl font-bold" style={{ color: "#1E90FF" }}>
                Kasahun Nigusu
              </h4>
              <p className="text-gray-600">Operations Manager</p>
              <p className="text-gray-600 mt-2 text-center">
                ensures that our operations are seamless, managing day-to-day
                activities with precision and efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h4 className="text-xl font-bold" style={{ color: "#1E90FF" }}>
                David Nigusu
              </h4>
              <p className="text-gray-600">Account Manager</p>
              <p className="text-gray-600 mt-2 text-center">
                oversees client relationships, ensuring their needs are met and
                building long-term partnerships that benefit our business.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
