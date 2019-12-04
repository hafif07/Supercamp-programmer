import React from "react";
import "./Keunggulan.scss";
import ScrollAnimation from "react-animate-on-scroll";
const Keunggulan = ({ keunggulan }) => {
  return (
    <div className="row mt-5 keungulan justify-content-center text-center">
      <div className="col-md-12">
        <ScrollAnimation animateIn="fadeInDown">
          <h1>Keunggulan Pelatihan di Supercamp Programmer</h1>
        </ScrollAnimation>
      </div>
      <div className="col-md-10">
        <div className="row ">
          {keunggulan.map((data, index) => (
            <div className="col-md-4 mt-5">
              {/* content card open */}
              <div className="card" key={index}>
                <i className={data.i}></i>
                <div className="card-body">
                  <p className="card-text">{data.text}</p>
                </div>
              </div>

              {/* content card close */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Keunggulan;
