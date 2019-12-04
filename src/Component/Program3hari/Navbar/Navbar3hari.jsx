import React from "react";
import Logo from "../../../Assets/logo4.png";

const NavbarProgram = () => {
  return (
    <nav
      style={{ background: "white" , boxShadow:"rgb(119, 119, 119) 0px 0px 15px" }}
      className="navbar navbar-light  fixed-top "
    >
      <img src={Logo} alt="" />
    </nav>
  );
};

export default NavbarProgram;
