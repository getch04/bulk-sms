import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div
      className="relative flex flex-1 flex-col w-full max-sm:w-full hover:border-2
      hover:rounded-[22px] hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-sm hover:p-2
      hover:cursor-pointer"
    >
      <div className="relative">
        <img
          src={imgURL}
          alt={name}
          className="object-contain hover:rounded-[25px]"
        />
        <div className="absolute inset-0 flex items-center justify-center hover:opacity-100 opacity-0 duration-300 hover:border-2 hover:rounded-[25px]">
          <p className="text-white text-xl font-semibold">View Details</p>
        </div>
      </div>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="Rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="font-montserrat mt-2 font-semibold text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
