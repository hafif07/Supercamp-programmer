import React from "react";
import "./Founder.scss";
import Foto1 from "../../../Assets/hafif.jpg";
import Foto2 from "../../../Assets/wandi.jpg";

const Founder = () => {
  return (
    <div className="row mt-5 ">
      <div className="col-md-6 row-founder-text ">
        <div className="card card-founder">
          <div className="card-body text-center text-founder ">
            {" "}
            <h1  className="title-founder-text">
              Founder dan CO-Founder Supercamp Programmer
            </h1>
          </div>
        </div>
      </div>
      <div className="col-md-6 ">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div className="box-1">
                <div className="imgBx">
                  <img className="foto1" src={Foto1} alt="" />
                </div>
                <div className="content-mutiara">
                  <h5 className="text-center">
                    M.Hafif Al-Busyro <br></br>
                    <p className="title-ceo"> Founder</p>
                  </h5>

                  <p className="mt-5">
                    “ Gunakan lah ilmu yang telah diberikan oleh Allah untuk
                    memperjuangkan agama ini dan membantu orang lain “
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 bg-wandi">
              <div className="box-1">
                <div className="imgBx">
                  <img className="foto1" src={Foto2} alt="" />
                </div>
                <div className="content-mutiara">
                  <h5 className="text-center">
                    Wandi Pratama <br></br>
                    <p className="title-ceo"> CO-Founder</p>
                  </h5>
                  <p className="mt-5">
                    “ Gunakan lah ilmu yang telah diberikan oleh Allah untuk
                    memperjuangkan agama ini dan membantu orang lain “
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
