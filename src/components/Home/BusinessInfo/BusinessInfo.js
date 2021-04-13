import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const BusinessInfo = () => {
  const infosData = [
    {
      title: "Opening Hours",
      description: "We are open 7 days",
      icon: faClock,
      background: "primary",
    },
    {
      title: "Visit Our Location",
      description: "Anantapur, Kasba B-baria 3460 BD",
      icon: faMapMarkerAlt,
      background: "dark",
    },
    {
      title: "Contact us Now",
      description: "+8801795577433",
      icon: faPhone,
      background: "primary",
    },
  ];
  return (
    <section className="d-flex justify-content-center">
      <div className="row w-75">
        {infosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
