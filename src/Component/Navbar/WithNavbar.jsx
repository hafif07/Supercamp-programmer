import React from "react";
import NavbarContainer from "../../Container/Navbar/Navbar"

const withNavbar = OriginalComponent => {
  class NewComponent extends React.Component {
    render() {
      return (
        <>
          <NavbarContainer/>
          <OriginalComponent />
        </>
      );
    }
  }
  return NewComponent;
};

export default withNavbar;
