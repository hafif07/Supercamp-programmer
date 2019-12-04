import React from "react";
import "./ProdukLayanan.scss";
import rjs from "../../../Assets/sampuljs.png"
import rn from "../../../Assets/sampulrn.png"
import ScrollAnimation from "react-animate-on-scroll" 

const ProdukLayanan = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-12 bg-txt">
        <ScrollAnimation animateIn="fadeInDown">
        <h1 className="text-center">Produk Layanan Pelatihan</h1>
        </ScrollAnimation>
      </div>
      <div className="col-md-12 mt-5 ">
        <div className="row react-row">
          <div className="col-md-6 d-flex justify-content-center mb-5">
            <ScrollAnimation animateIn="fadeInLeft">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={rjs}
                className="card-img-top"
                alt="..."
              />
              <div className="card-text">
                <p className="mt-3 text-center">React Js Redux</p>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-6 d-flex justify-content-center mb-5">
            <ScrollAnimation animateIn="fadeInRight">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={rn}
                className="card-img-top"
                alt="..."
              />
              <div className="card-text">
              <p className="mt-3 text-center">React Native Redux</p>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProdukLayanan;
