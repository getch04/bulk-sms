import React from "react";

import {
  FaChartLine,
  FaCog,
  FaListAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

function HowItWorks() {
  const howItWorks = [
    {
      title: "Contact Us",
      description:
        "Get in touch with us to learn more about our services and how we can help you.",
      icon: <FaPhoneAlt className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "Choose a Plan",
      description:
        "Select the plan that best suits your needs from our range of offerings.",
      icon: <FaListAlt className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "Start Messaging",
      description: "Use our platform to send and receive messages seamlessly.",
      icon: <FaPaperPlane className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "Monitor Performance",
      description:
        "Track your message delivery and performance through our analytics dashboard.",
      icon: <FaChartLine className="text-4xl text-blue-500 mb-4" />,
    },
  ];

  return (
    <section id="how-it-works" className="flex flex-col items-center py-28">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-96 px-80 max-lg:px-5">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center px-4 text-center">
            <FaCog className="text-8xl text-white mb-4" />
            <h2 className="text-3xl font-bold text-white">How It Works</h2>
            <p className="text-lg text-white mt-4">
              Discover how our service can help you communicate more
              effectively. Follow these simple steps to get started.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {step.icon}
              <h3 className="text-center font-bold font-montserrat text-xl bg-gradient-to-r from-red-800 to-orange-500 bg-clip-text text-transparent">{step.title}</h3>
              <p className="text-gray-700 mt-2 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
