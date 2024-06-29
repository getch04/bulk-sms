import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    setIsAtBottom(isBottom);
  };

  const scrollToSection = () => {
    window.scrollTo({
      top: isAtBottom ? 0 : document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToSection}
      className="fixed right-4 bottom-4 bg-coral-red text-white p-3 rounded-full shadow-lg hover:bg-coral-red-dark transition duration-300 ease-in-out"
    >
      {isAtBottom ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
    </button>
  );
};

export default ScrollButton;
