import React from "react";

const ReviewCard = ({ item }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={item.imgURL}
        alt="customer"
        className="object-cover w-[260px] h-[160px]"
      />
      <h3 className="mt-1 font-palanquin text-2xl text-center font-bold">
        {item.title}
      </h3>
      <p className="mt-6 max-w-sm text-center info-text">{item.description}</p>
      {/*  <div className="mt-3 flex justify-center items-center gap-2.5">
       <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
         <p className="text-xl font-montserrat text-slate-gray">
          {item.rating}
        </p>
      </div>
*/}
    </div>
  );
};

export default ReviewCard;
