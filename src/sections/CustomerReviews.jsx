//import reviews
import { whyChooseUs } from "../constants";
//import ReviewCard
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        WHY
        <span> </span>
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">CHOOSE </span>
         US?
      </h3>
      {/* <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p> */}
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {whyChooseUs.map((item) => (
          <ReviewCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
