import React from "react";
import {
  FaCalendarAlt,
  FaReply,
  FaSms,
  FaTools,
  FaUserCheck,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { mass1, mass2, mass3, mass4 } from "../assets/images";

const servicesData = [
  {
    title: "Mass Text Messaging",
    description:
      "Send bulk SMS messages to your customers with ease and efficiency, ensuring your message reaches a wide audience quickly.",
    icon: "FaSms",
    image: mass1,
    details: `
      Mass Text Messaging allows businesses to reach a large number of customers simultaneously with just one click. This service is perfect for:
      - Marketing campaigns
      - Event notifications
      - Emergency alerts
      - Customer engagement
      Benefits include:
      - High delivery rates
      - Instant reach
      - Cost-effectiveness
      - Easy to manage and schedule
    `,
  },
  {
    title: "Two-Way Messaging",
    description:
      "Engage in meaningful conversations with your customers through our two-way messaging service, allowing for instant replies and interactions.",
    icon: "FaReply",
    image: mass2,
    details: `
      Two-Way Messaging facilitates real-time interaction between businesses and their customers. This service is ideal for:
      - Customer support
      - Surveys and feedback collection
      - Appointment confirmations
      - Personalized engagement
      Features include:
      - Instant replies
      - Conversation history tracking
      - Seamless integration with customer service platforms
      - Enhances customer satisfaction and loyalty
    `,
  },
  {
    title: "Automated Scheduling",
    description:
      "Schedule your messages to be sent at the perfect time with our automated scheduling feature, ensuring timely communication with your audience.",
    icon: "FaCalendarAlt",
    image: mass3,
    details: `
      Automated Scheduling allows businesses to plan and schedule messages in advance, ensuring they reach customers at the right time. This service is useful for:
      - Marketing campaigns
      - Appointment reminders
      - Bill payment reminders
      - Seasonal promotions
      Key features:
      - Flexible scheduling options
      - Recurring messages
      - Time zone support
      - Analytics and reporting to track performance
    `,
  },
  {
    title: "Personalized Messaging",
    description:
      "Personalize your SMS messages to address each customer by name, enhancing the effectiveness and engagement of your communications.",
    icon: "FaUserCheck",
    image: mass4,
    details: `
      Personalized Messaging enhances customer engagement by addressing recipients by their names and tailoring messages to their preferences. This service is perfect for:
      - Personalized marketing
      - Customer relationship management
      - Birthday and anniversary greetings
      - Targeted promotions
      Advantages:
      - Higher engagement rates
      - Improved customer experience
      - Increased loyalty and retention
      - Easy to set up and manage
    `,
  },
];

const iconComponents = {
  FaSms: <FaSms className="text-6xl text-blue-500 mb-4" />,
  FaReply: <FaReply className="text-6xl text-blue-500 mb-4" />,
  FaCalendarAlt: <FaCalendarAlt className="text-6xl text-blue-500 mb-4" />,
  FaUserCheck: <FaUserCheck className="text-6xl text-blue-500 mb-4" />,
};

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (service) => {
    navigate("/services/detail", {
      state: {
        imgURL: service.image,
        name: service.title,
        description: service.description,
        details: service.details,
        icon: service.icon,
      },
    });
  };

  return (
    <section id="services" className="flex flex-col items-center py-28">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-96 px-80 max-lg:px-5">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center px-4 text-center">
            <FaTools className="text-8xl text-white mb-4" />{" "}
            {/* Upper icon added */}
            <h2 className="text-3xl font-montserrat font-bold text-white">Our Services</h2>
            <p className="text-lg text-white mt-4">
              Discover the wide range of services we offer to enhance your
              communication and business outreach.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 px-4">
        <div className="flex flex-col gap-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col md:flex-row items-center cursor-pointer"
              onClick={() => handleCardClick(service)}
            >
              <div className="flex-shrink-0">
                {iconComponents[service.icon]}
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl font-bold text-blue-500 font-montserrat">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-700 mt-2 mb-4">
                  {service.description}
                </p>
              </div>
              <div className="w-full h-64 overflow-hidden rounded-lg mt-4 md:mt-0 md:ml-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
