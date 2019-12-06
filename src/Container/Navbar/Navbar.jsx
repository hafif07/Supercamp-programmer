import React from "react";
import Navbar from "../../Component/Navbar/Navbar";

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "transparent",
      font: "white",
      shadow: " ",
      logo: false,
      home: "#1b92de",
      about: "white",
      instructor: "white",
      portofolio: "white",
      testimoni: "white",
      contact: "white",
      program: "white"
    };
  }

  listenScrollEvent = e => {
    const about = document.getElementById("about")
    const instructor = document.getElementById("instructor")
    const portofolio = document.getElementById("portofolio")
    const testimoni = document.getElementById("testimoni")
    const contact = document.getElementById("contact")
    const program = document.getElementById("program")
    
        if (window.scrollY > contact.offsetTop - 450) {
          this.setState({
            about: "#1C3864",
            home: "#1C3864",
            instructor: "#1C3864",
            portofolio: "#1C3864",
            testimoni: "#1C3864",
            contact: "#1b92de",
            program: "#1C3864",
            color: "white",
            logo: true,
            shadow: "0px 0px 15px #777",

          });
        } else if (window.scrollY > testimoni.offsetTop - 50) {
          this.setState({
            about: "#1C3864",
            home: "#1C3864",
            instructor: "#1C3864",
            portofolio: "#1C3864",
            testimoni: "#1b92de",
            contact: "#1C3864",
            program: "#1C3864",
            color: "white",
            logo: true,
            shadow: "0px 0px 15px #777",

          });
        } else if (window.scrollY > portofolio.offsetTop - 50) {
          this.setState({
            about: "#1C3864",
            home: "#1C3864",
            instructor: "#1C3864",
            portofolio: "#1b92de",
            testimoni: "#1C3864",
            contact: "#1C3864",
            program: "#1C3864",
            color: "white",
            logo: true,
            shadow: "0px 0px 15px #777",

          });
        } else if (window.scrollY > instructor.offsetTop - 50) {
          this.setState({
            about: "#1C3864",
            home: "#1C3864",
            instructor: "#1b92de",
            portofolio: "#1C3864",
            testimoni: "#1C3864",
            contact: "#1C3864",
            program: "#1C3864",
            color: "white",
            logo: true,
            shadow: "0px 0px 15px #777",

          });
        } else if (window.scrollY > program.offsetTop - 50) {
          this.setState({
            program: "#1b92de",
            color: "white",
            home: "#1C3864",
            about: "#1C3864",
            instructor: "#1C3864",
            portofolio: "#1C3864",
            testimoni: "#1C3864",
            contact: "#1C3864",
            logo: true,
            shadow: "0px 0px 15px #777",

          });
        } else if (window.scrollY > about.offsetTop - 50) {
          this.setState({
            about: "#1b92de",
            home: "#1C3864",
            instructor: "#1C3864",
            portofolio: "#1C3864",
            testimoni: "#1C3864",
            contact: "#1C3864",
            program: "#1C3864",
            color: "white",
            logo: true,
            shadow: "0px 0px 15px #777",

          });
        } else if (window.scrollY > 300) {
          this.setState({
            color: "white",
            font: "#004489",
            shadow: "0px 0px 15px #777",
            logo: true,
            home: "#1C3864",
            about: "#1C3864",
            instructor: "#1C3864",
            portofolio: "#1C3864",
            testimoni: "#1C3864",
            contact: "#1C3864",
            program: "#1C3864"
          });
        } else {
          this.setState({
            color: "transparent",
            font: "white",
            shadow: "",
            logo: false,
            home: "#1b92de",
            about: "white",
            instructor: "white",
            portofolio: "white",
            testimoni: "white",
            contact: "white",
            program: "white"
          });
       


    }


    
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    const {
      home,
      about,
      instructor,
      portofolio,
      testimoni,
      contact,
      program
    } = this.state;
    return (
      <Navbar
        color={this.state.color}
        font={this.state.font}
        shadow={this.state.shadow}
        logo={this.state.logo}
        home={home}
        about={about}
        instructor={instructor}
        portofolio={portofolio}
        testimoni={testimoni}
        contact={contact}
        program={program}
      />
    );
  }
}

export default NavbarContainer;
