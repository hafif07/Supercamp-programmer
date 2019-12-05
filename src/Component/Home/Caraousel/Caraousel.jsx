import React from "react";
import "./Caraousel.scss";
import Data from "./Data.json";

const Caraousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide coba"
      data-ride="carousel"
      data-interval="3000"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        <li data-target="#carouselExampleIndicators" data-slide-to={3} />
      </ol>
      <div className="carousel-inner carousel-img">
        {Data.Data.map(data => (
          <div key={data.id} className={data.class}>
            <div className="card card-title-caraousel">
              <div className="card-body ">
                <h5 className="card-title animated fadeIn delay-1s">{data.h5}</h5>
                <p className="card-text animated fadeIn delay-1s">{data.text}</p>
              </div>
            </div>
            <img src={data.img} className="d-block animated zoomIn  " alt="..." />
          </div>
        ))}
        <div className="bg"></div>
      </div>
    </div>
  );
};

export default Caraousel;
