import React from "react";

// src/pages/DetailService.js

import { useLocation } from "react-router-dom";

const DetailService = () => {
  const location = useLocation();
  const service = location.state;

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <section className="service-detail p-6">
      <h1 className="service-title text-3xl font-bold">{service.label}</h1>
      <img
        src={service.imgURL}
        alt={service.label}
        className="service-image my-4"
      />
      <p className="service-description text-lg">{service.subtext}</p>
      <p className="service-full-description text-base">
        {service.description}
      </p>
    </section>
  );
};

export default DetailService;
