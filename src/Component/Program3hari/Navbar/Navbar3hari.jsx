import React from "react";
import Logo from "../../../Assets/logo4.png";

const NavbarProgram = () => {
  return (
    <nav
      style={{ background: "white" }}
      className="navbar navbar-light  fixed-top "
    >
      <img src={Logo} alt="" />
    </nav>
  );
};

export default NavbarProgram;
