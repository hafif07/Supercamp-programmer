import React from "react";
import Logo from "../../../Assets/logo4.png";
import { Link } from "react-router-dom";

const NavbarProgram = () => {
  return (
    <nav
      style={{
        background: "white",
        boxShadow: "rgb(119, 119, 119) 0px 0px 15px"
      }}
      className="navbar navbar-light  fixed-top "
    >
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </nav>
  );
};

export default NavbarProgram;
