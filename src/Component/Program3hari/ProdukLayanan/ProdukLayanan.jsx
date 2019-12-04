import React from "react";
import "./ProdukLayanan.scss";
import rjs from "../../../Assets/rjs.png"
import rn from "../../../Assets/rn.png"

const ProdukLayanan = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-12 bg-txt">
        <h1 className="text-center">Produk Layanan Pelatihan</h1>
      </div>
      <div className="col-md-12 mt-5 ">
        <div className="row react-row">
          <div className="col-md-6 d-flex justify-content-center mb-5">
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
          </div>
          <div className="col-md-6 d-flex justify-content-center mb-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProdukLayanan;
