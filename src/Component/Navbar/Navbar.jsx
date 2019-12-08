import React from "react";
import Logo from "../../Assets/logo4.png";
import Logo2 from "../../Assets/logo4white.png";
import "./Navbar.scss";

const Navbar = ({
  color,
  shadow,
  logo,
  home,
  about,
  // instructor,
  portofolio,
  testimoni,
  contact,
  program
}) => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top header"
      style={{ background: `${color}`, boxShadow: `${shadow}` }}
    >
      <a href="https://supercampprogrammer.com/">
        <img src={logo === false ? Logo2 : Logo} alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-list"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="mr-auto"></div>
        <div className="navbar-nav">
          <a
            style={{ color: `${home}` }}
            className="nav-item nav-link text-p"
            href="#home"
          >
            Beranda
          </a>
          <a
            style={{ color: `${about}` }}
            className="nav-item nav-link "
            href="#about"
          >
            Tentang Kami
          </a>

          <a
            style={{ color: `${program}` }}
            className="nav-item nav-link "
            href="#program"
          >
            Program
          </a>

          {/* <a
            style={{ color: `${instructor}` }}
            className="nav-item nav-link "
            href="#instructor"
          >
            Mentor
          </a> */}

          <a
            style={{ color: `${portofolio}` }}
            className="nav-item nav-link "
            href="#portofolio"
          >
            Portofolio
          </a>

          <a
            style={{ color: `${testimoni}` }}
            className="nav-item nav-link "
            href="#testimoni"
          >
            Testimoni
          </a>

          <a
            style={{ color: `${contact}` }}
            className="nav-item nav-link "
            href="#contact"
          >
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
