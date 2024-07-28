import Button from "../components/Button";

const Subscribe = () => {
  return (
    // <section
    //   id="contact-us"
    //   className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    // >
    //   <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
    //     Signup for <span className="text-coral-red">Updates</span> & Newsletter
    //   </h3>
    //   <div className="lg:max-w[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
    //     <input type="text" placeholder="Subscribe@nike.com" className="input" />
    //     <div className="flex max-sm:justify-end items-center max-sm:w-full">
    //       <Button label="Sign Up" fullWidth />
    //     </div>
    //   </div>
    // </section>

    <section
      id="contact-us"
      className="max-container flex  w-full items-center gap-10 max-lg:p-3 p-10 max-lg:flex-col"
    >
      <h3 className="text-4xl max-lg:text-3xl  lg:max-w-md font-palanquin font-bold text-center">
        Reach us out for{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Inquiries
        </span>{" "}
        & Support
      </h3>
      <div className="w-full flex flex-col gap-5 max-lg:p-2 p-5 rounded-lg bg-gray-50">
        <input
          type="text"
          placeholder="Your Name"
          className="input w-full border border-gray-500 rounded-full px-6 py-4 text-gray-700  focus:ring-2 focus:ring-red-400"
        />
        <input
          type="text"
          placeholder="Your Email/Phone Number"
          className="input w-full border border-gray-500 rounded-full px-6 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        <textarea
          placeholder="Your Message"
          className="input w-full border border-gray-500 rounded-lg px-6 py-4 text-gray-700  focus:ring-2 focus:ring-red-400"
          rows="5"
        />
        <div className="flex justify-center items-center w-full">
          <Button
            label="Send Message"
            fullWidth
            className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 rounded-full px-6 py-4 font-semibold"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
