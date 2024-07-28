import React from "react";
import { useNavigate } from "react-router-dom";
import { bulkSms2 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  const navigate = useNavigate();

  const handleViewDetailsClick = () => {
    navigate("/services");
  };

  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          We provide you
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            {" "}
            Super Quality{" "}
          </span>
          SMS Service
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Delivering premium communication solutions, our meticulously crafted
          bulk SMS service is designed to elevate your business outreach,
          providing you with the best messaging quality.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Our dedication to excellence ensures that you get the best service.
        </p>
        <div className="mt-11" onClick={handleViewDetailsClick}>
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center bg-pale-blue">
        <img
          src={bulkSms2}
          alt="bulkSms2"
          width={517}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
