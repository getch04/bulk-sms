import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
       ${
         backgroundColor
           ? `${backgroundColor} ${borderColor} ${textColor}`
           : "bg-coral-red border-coral-red text-white"
       } rounded-full ${fullWidth && 'w-full'} transition duration-300 ease-in-out transform hover:scale-110 hover:bg-opacity-80`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
