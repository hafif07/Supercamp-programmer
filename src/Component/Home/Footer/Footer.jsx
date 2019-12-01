import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="m-5 footer-row">
        <div className="row text-white">
          <div className="col-md-6 mb-5">
            <h1 className="card-title">CONTACT</h1>
            <div className="mt-5">
              <p>
                <i className="fa fa-map-marker"></i>
                Gegunung, Tirtohargo, Kec. Kretek, Bantul, Daerah Istimewa
                Yogyakarta 55772
              </p>
              <p>
                {" "}
                <i className="fa fa-phone-alt"></i>+6287787331091{" "}
              </p>

              <p className="card-text">
                {" "}
                <i className="fas fa-envelope"></i>pondokprogrammer@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <h1 className="card-title">TENTANG</h1>
            <div className="mt-5">
              <p>ok</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
