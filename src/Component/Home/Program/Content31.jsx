import React from "react";
import money from "../../../Assets/money.svg";
import free from "../../../Assets/free.svg";
import "./Content31.scss";
// import ScrollAnimation from 'react-animate-on-scroll'

const Content31 = () => {
  return (
    <div className="row pb-5">
      <div className="col-md-12 text-center h1-judul">
        <h1>Program</h1>
      </div>
      <div className="col-md-12 program-card">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="card">
              <div className="card-body">
                <img src={money} alt="" />
                <div className="card-text text-center">
                  <h3>Program Berbayar</h3>
                  <br />
                  <a href="https://supercampprogrammer.com/berbayar">
                    <button className="btn btn-success">
                      Lihat Selengkapnya
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="card">
              <div className="card-body">
                <img src={free} alt="" />
                <div className="card-text text-center">
                  <h3>Program Bebas Biaya</h3>
                  <br />
                  <a href="https://supercampprogrammer.com/bebas_biaya">
                    <button className="btn btn-success">
                      Lihat Selengkapnya
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content31;
