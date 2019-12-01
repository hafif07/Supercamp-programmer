import React from "react";
import "./Founder.scss";
import Foto1 from "../../../Assets/hafif.jpg";
import Foto2 from "../../../Assets/wandi.jpg";

const Founder = () => {
  return (
    <div className="row mt-5 mb-5 text-center">
      <div className="col-md-12 mb-5">
        <h1>Founder dan Co-Founder </h1>
      </div>

      <div className="col-md-12">
        <div className="row d-flex justify-content-center">
          <div className="box-1 ml-5 mt-5">
            <div className="imgBx">
              <img className="foto1" src={Foto1} alt="" />
            </div>
            <div className="content-mutiara">
              <h5 className="text-center">
                M.Hafif Al-Busyro<br></br>
                <p className="title-ceo">React Native Instructor</p>
              </h5>

              <p className="mt-5 text-center">
                “ Gunakan lah ilmu yang telah diberikan oleh Allah untuk
                memperjuangkan agama ini dan membantu orang lain “
              </p>
            </div>
          </div>
          <div className="box-1 ml-5 mt-5">
            <div className="imgBx">
              <img className="foto1" src={Foto2} alt="" />
            </div>
            <div className="content-mutiara">
              <h5 className="text-center">
                Wandi Pratama <br></br>
                <p className="title-ceo">Co-Founder</p>
              </h5>

              <p className="mt-5 text-center">
                "Siap membantu kamu untuk mencapai semua tujuanmu"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
