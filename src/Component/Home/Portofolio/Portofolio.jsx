import React from "react"
import Data from "./Data.json";
import "./Portofolio.scss";

const Portofolio = props => {
  return (
    <div className="row mt-5">
      <div className="col-md-12 text-center txt-por">
        <h1>Portofolio</h1>
      </div>
      <div className="col-md-12 mt-5">
        <div className="card-columns card-box-porto">
          {Data.Data.map(img => (
            <div key={img.id} className="card porto-card">
              <img
                onClick={() => props.handleChange(img)}
                ut
                src={img.img}
                className="card-img-top"
                alt="..."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
