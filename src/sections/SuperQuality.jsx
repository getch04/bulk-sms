//import BUTTON component
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          We provide you
          <span className="text-coral-red"> Super Quality </span>Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium confort and style, our meticulously crafted footwear
          is designed to elevate your everyday look, providing you with the best
          quality shoes.
        </p>

        <p className="mt-6 info-text lg:max-w-lg">
          Our dedication to quality ensures that you get the best product
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={517}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
