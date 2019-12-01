import React from "react";
import "./Content1.scss";

const Content1 = () => {
  return (
    <>
      <div className="box-our">
        <p className="text-center title-desc">Our Vision</p>
        <div className="row box-content1">
          <div className="col-md-12 box-title-content1">
            <div className="card card-box-content1">
              <p className="text-center">
                <i className="fa fa-quote-left"></i> Menjadi lembaga pendidikan
                yang menyiapkan programmer profesional , kreatif ,serta inovatif
                yang mampu bersaing di dunia nasional dan internasional{" "}
                <i className="fa fa-quote-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content1;
