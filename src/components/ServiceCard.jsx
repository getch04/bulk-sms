import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[300px] sm:min-w-[300px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full ">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <div className="mt-8">
        <h3 className="text-2xl leading-normal font-semibold font-palanquin">
          {label}
        </h3>
        <p className="mt-2 text-lg leading-8 font-montserrat text-slate-gray">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
