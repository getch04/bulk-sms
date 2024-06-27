import { thumbnailShoe1 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col"
    >
      <div className="flex flex-col gap-5">
        <h1 className=" text-4xl font-bold font-montserrat sm:max-w-sm">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h1>
      </div>
      <div className="rounded-md bg-card flex">
        <img src={thumbnailShoe1} alt="card shoe" />
      </div>
    </section>
  );
};

export default SuperQuality;
