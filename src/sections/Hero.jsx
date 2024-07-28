//import Button component
import Button from "../components/Button";

// import arrowRight image
import { useState } from "react";
import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";
import { arrowRight } from "../assets/icons";
import { mass1 } from "../assets/images";
import { statistics } from "../constants";

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(mass1);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us");
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 flex
      flex-col justify-center items-start
      w-full
      max-xl:padding-x
      pt-28"
      >
        <p className="text-xl font-montserrat bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          <Typewriter
            words={[
              "All Corner Services",
              "The Leading In Town",
              "Affordable Pricing",
              "Reliable and Fast",
              "24/7 Customer Support",
              "Join Thousands of Satisfied Clients",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl
        max-sm:text-[72px]
        max-sm:leading-[82px]
        font-bold
        "
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Reach Thousands
          </span>
          <br />
          <span>in </span>
          <span className="from-cyan-500 to-blue-500 bg-clip-text text-transparent inline-block mt-3">Seconds</span>
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Your Premier Partner for Business Messaging Solutions, Delivering
          Efficiency and Reach.
        </p>
        <div onClick={handleClick}>
          <Button label="Get Started" iconURL={arrowRight} />
        </div>
        <div
          className="flex  justify-start items-start flex-wrap
       w-full mt-20 gap-16"
        >
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <h1 className="text-4xl font-bold font-palanquin">
                <CountUp end={parseInt(stat.value)} duration={5} />
                {stat.value.replace(/[0-9]/g, "")}
              </h1>
              <p className=" text-slate-gray leading-7 font-montserrat">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex lg:justify-end items-center xl:min-h-screen max-xl:py-40 justify-center sm:py-0 bg-center">
        <img
          src={bigShoeImg}
          alt="Shoe collection"
          height={600}
          width={610}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
