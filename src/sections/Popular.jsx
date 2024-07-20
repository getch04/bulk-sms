import PopularProductCard from "../components/PopularProductCard";
import { popularServices } from "../constants";

const Popular = () => {
  return (
    <section id="services" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          Our <span className=" text-coral-red"> Popular</span> Services
        </h2>
        <p className="text-slate-gray font-montserrat lg:max-w-screen-md text-center mt-2">
          Discover the Most Effective Bulk SMS Services Tailored for Your
          Business Needs. Our top-rated solutions ensure your messages reach
          thousands instantly, driving engagement and delivering results.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-16 gap-14">
        {popularServices.map((serv) => (
          <PopularProductCard key={serv.name} {...serv} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
