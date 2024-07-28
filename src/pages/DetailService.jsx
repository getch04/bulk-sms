import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DetailService = () => {
  const location = useLocation();
  const service = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <div>Service not found</div>;
  }

  // Function to split details into chunks of three sentences
  const splitDetails = (details) => {
    const sentences = details
      .split(". ")
      .map((sentence) => sentence.trim())
      .filter(Boolean);
    const chunks = [];
    for (let i = 0; i < sentences.length; i += 3) {
      chunks.push(
        sentences.slice(i, i + 3).join(". ") + (sentences[i + 2] ? "." : "")
      );
    }
    return chunks;
  };

  const detailsChunks = splitDetails(service.details);

  return (
    <section className="service-detail py-28 px-20 flex max-lg:flex-col justify-evenly items-center">
      <img
        src={service.imgURL}
        alt={service.name}
        height={500}
        width={500}
        className="service-image my-4"
      />
      <div className="flex flex-col items-start">
        <h1 className="service-title text-3xl font-bold">{service.name}</h1>
        <p className="service-description text-lg">{service.description}</p>
        <div className="service-full-description text-base">
          {detailsChunks.map((chunk, index) => (
            <p key={index} className="my-2">
              {chunk}
              <br />
              <br />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailService;
