import React from "react";

const PopularProductCard = ({ imgURL, name, description }) => {
  return (
    <div
      className="relative flex flex-1 flex-col w-full max-sm:w-full hover:border-2
     hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-sm p-2
      hover:cursor-pointer"
    >
      <div className="relative p-6 h-[250px] hover:bg-gradient-to-r from-cyan-500 to-blue-500">
        <img src={imgURL} alt={name} className="object-contain h-full w-full" />
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="font-montserrat mt-2 font-semibold text-slate-gray leading-normal">
        {description}
      </p>
    </div>
  );
};

export default PopularProductCard;
