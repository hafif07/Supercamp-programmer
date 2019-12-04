import React from "react";
import "./Footer.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer-row d-flex justify-content-around">
        <div className="row text-white  ">
          <div className="col-md-4 text-center box-footer">
            <ScrollAnimation animateIn="fadeInDown">
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
            </ScrollAnimation>
          </div>

          <div className="col-md-4 text-center box-footer">
            <ScrollAnimation animateIn="fadeInDown">
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
            </ScrollAnimation>
          </div>
          <div className="col-md-4 text-center box-footer">
            <ScrollAnimation animateIn="fadeInDown">
              <div className="card" style={{ width: "18rem" }}>
                <i className="fas fa-envelope-open-text icon-f"></i>
                <div className="card-body">
                  <h5 className="card-text">Email Kami</h5>
                  <p>
                    {" "}
                    ingin bantuan melalui email, hubungi kami di alamat email
                    ini
                  </p>
                  <p> pondokprogrammer@gmail.com</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
