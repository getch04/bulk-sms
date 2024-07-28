import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { faqData } from "../constants";

const FAQItem = ({ faq, index, toggleFAQ }) => (
  <div
    className="border-b border-gray-200 py-4 cursor-pointer"
    onClick={() => toggleFAQ(index)}
  >
    <h3 className="text-lg font-bold text-gray-800 flex items-center">
      {faq.question}
      <span className="ml-auto text-cyan-500 transition-transform transform duration-300">
        {faq.open ? "-" : "+"}
      </span>
    </h3>
    {faq.open && <p className="text-gray-700 mt-2">{faq.answer}</p>}
  </div>
);

const FAQ = () => {
  const [faqs, setFaqs] = useState(
    faqData.map((faq) => ({ ...faq, open: false }))
  );

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : faq.open,
      }))
    );
  };

  return (
    <section id="faq" className="py-28 flex flex-col items-center">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-96 flex flex-col items-center justify-center px-4">
        <FaQuestionCircle className="text-8xl text-white mb-4 " />
        <h2 className="text-5xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-white mt-4 text-center max-w-2xl">
          Have questions? We’ve got answers! Explore our FAQ section to find the
          information you need about our services, pricing, and more.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-16 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
