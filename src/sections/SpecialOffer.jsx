//import offer
import { offer } from "../assets/images";
//import Button
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap  items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1 ">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          Special
          <span className="text-coral-red"> Offer </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on shopping journey that redefines your experience with
          unbeatable deals. From the latest trends to the most popular items, we
          have everything you need to make a statement.
        </p>

        <p className="mt-6 info-text lg:max-w-lg">
          Navigate a realm of possibilities to fullfill your unique desires,
          surpassing the loftiest expectations. your journey to the ultimate
          shopping experience starts here.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View Details" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
