import React from "react";
import Navbar from "../../Component/Navbar/Navbar";

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "transparent",
      font: "white",
      shadow: " ",
      logo: false
    };
  }

  listenScrollEvent = e => {
    if (window.scrollY > 300) {
      this.setState({
        color: "white",
        font: "#004489",
        shadow: "0px 0px 15px #777",
        logo: true
      });
    } else {
      this.setState({
        color: "transparent",
        font: "white",
        shadow: "",
        logo: false
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Navbar
        color={this.state.color}
        font={this.state.font}
        shadow={this.state.shadow}
        logo={this.state.logo}
      />
    );
  }
}

export default NavbarContainer;
