import React from "react";
import "./MakeAppointment.css";
import doctor from "../../../images/doctor.png";

const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="make-appointment-container">
        <div className="row container">
          <div className="col-md-6">
            <img
              className="img-fluid make-appointment-doctor-img"
              src={doctor}
              alt=""
            />
          </div>
          <div className="col-md-6 mt-5 text-white">
            <h5 className="text-primary text-uppercase">Appointment</h5>
            <h1 className="my-4">
              Make an Appointment <br /> Today
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
