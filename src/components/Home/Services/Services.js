import React from "react";
import fluoride from "../../../images/Fluoride.png";
import cavity from "../../../images/Cavity.png";
import whitening from "../../../images/Whitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
  const serviceData = [
    {
      name: "Fluoride Treatment",
      img: fluoride,
    },
    {
      name: "Cavity Filling",
      img: cavity,
    },
    {
      name: "Teeth Whitening",
      img: whitening,
    },
  ];
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
        <h2 style={{ color: "#3a4256" }}>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 pt-5">
          {serviceData.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
