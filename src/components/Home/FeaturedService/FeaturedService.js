import React from "react";
import featured from "../../../images/featured.png";

const FeaturedService = () => {
  return (
    <section className="features-service my-5 pb-0 pb-md-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5 mb-4">
            <img className="img-fluid" src={featured} alt="" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1>
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className="text-secondary my-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              quia eius voluptatum animi excepturi laborum numquam officia odio.
              Perferendis labore iste hic ea tempora beatae, reiciendis
              voluptate fugit impedit omnis facilis architecto, quasi aliquam
              minus numquam, reprehenderit incidunt alias natus pariatur
              voluptas magni? Quisquam, sed quod. Corporis quaerat adipisci eum
              at. Quisquam laboriosam beatae eos sapiente dolor cum assumenda
              voluptate repellat, officiis in consequuntur quia. Dolor nemo
              reiciendis, ullam ad voluptate ex aperiam quibusdam? Quibusdam
              tempora quidem id corporis quae ad repellat repellendus dolorem
              quod! Obcaecati rem et sunt necessitatibus accusantium eaque,
              deserunt suscipit officia perferendis nostrum sed vero! Beatae?
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
