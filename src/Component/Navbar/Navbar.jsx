import React from "react";
import Logo from "../../Assets/logo3.png";
import Logo2 from "../../Assets/logowhite.png";
import "./Navbar.scss";

const Navbar = ({
  color,
  shadow,
  logo,
  home,
  about,
  instructor,
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
      <img src={logo === false ? Logo2 : Logo} alt="" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-list" ></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="mr-auto"></div>
        <div className="navbar-nav">
          <a
            style={{ color: `${home}` }}
            className="nav-item nav-link text-p"
            href="#home"
          >
            Home
          </a>
          <a
            style={{ color: `${about}` }}
            className="nav-item nav-link "
            href="#about"
          >
            About
          </a>

          <a
            style={{ color: `${program}` }}
            className="nav-item nav-link "
            href="#program"
          >
            Program
          </a>

          <a
            style={{ color: `${instructor}` }}
            className="nav-item nav-link "
            href="#instructor"
          >
            Instructor
          </a>

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
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
