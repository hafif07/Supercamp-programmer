import React from "react";
import "./Content1.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Content1 = () => {
  return (
    <>
      <div className="box-our">
        <ScrollAnimation animateIn="fadeInDown">
          <p className="text-center title-desc mb-5">Visi Supercamp Programmer</p>
        </ScrollAnimation>
        <div className="row box-content1">
          <div className="col-md-12 box-title-content1">
            <div className="card card-box-content1">
              <ScrollAnimation animateIn="fadeInDown">
                <p className="text-center">
                  <i className="fa fa-quote-left"></i> Menjadi wadah
                  pendidikan yang menyiapkan programmer profesional, kreatif
                  , serta inovatif yang mampu bekerja di perusahaan nasional maupun internasional dan mampu menciptakan budaya kerjasama dalam kebersamaan membangun negeri <i className="fa fa-quote-right"></i>
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content1;
