import React from "react";
import "./Testimoni.scss";
import Amar from "../../../Assets/people/amar.png"

const Testimoni = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card" style={{ width: "18rem" }}>
          <img style={{borderRadius:"50%"}} src={Amar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-12"></div>
    </div>
  );
};

export default Testimoni;
