import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-row d-flex justify-content-around">
        <div className="row text-white  ">
          <div className="col-md-4 text-center">
            <div className="card" style={{ width: "18rem" }}>
              <i className="fas fa-map-marked-alt icon-f"></i>
              <div className="card-body">
                <h5 className="card-text">Lokasi</h5>
                <p>
                  {" "}
                  Gegunung, Tirtohargo, Kec. Kretek, Bantul, Daerah Istimewa
                  Yogyakarta 55772
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card" style={{ width: "18rem" }}>
              <i className="fas fa-mobile-alt icon-f"></i>
              <div className="card-body">
                <h5 className="card-text">Hubungi Kami</h5>
                <p>
                  <i className="fa fa-whatsapp" aria-hidden="true"></i> +62
                  877-8733-1091
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card" style={{ width: "18rem" }}>
              <i className="fas fa-envelope-open-text icon-f"></i>
              <div className="card-body">
                <h5 className="card-text">Email Kami</h5>
                <p>
                  {" "}
                  ingin bantuan melalui email, hubungi kami di alamat email ini
                </p>
                <p> pondokprogrammer@gmail.com</p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 mb-5">
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
          </div> */}
          {/* <div className="col-md-6 mb-5">
            <h1 className="card-title">TENTANG</h1>
            <div className="mt-5">
              <p>ok</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Footer;
