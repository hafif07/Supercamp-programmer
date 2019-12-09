import React from "react";
import withNavbar from "../Navbar/WithNavbar";
import Caraousel from "./Caraousel/Caraousel";
import Content1 from "./Content1/Content1";
import "./Home.scss";
import Founder from "./Founder/Founder";
import Content2 from "./Content2/Content2";
// import Content3 from "./Content3/Content3";
// import Content4 from "./Content4/Content4";
import Footer from "./Footer/Footer";
import Copyright from "./Footer/Copyright";

import InstructorJS from "./Instructor/InstructorJS";
import PortofolioContainer from "../../Container/Portofolio/PortofolioContainer";
import Content31 from "./Program/Content31";
import Testimoni from "./Testimoni/Testimoni";
import KeunggulanContainer from "../../Container/Keunggulan/Keunggulan";
import Lokasi from "../Program3hari/Lokasi/Lokasi";

const Home = () => {
  return (
    <div className="box" id="home">
      <Caraousel />
      <div className="container-fluid">
        <div className="row">
          <div id="about" className="col-md-12 mt-5 baris1 ">
            <Content1 />
          </div>
          <div className="col-md-12 mt-5 baris2">
            <Content2 />
          </div>
          <div className="col-md-12">
            <KeunggulanContainer />
          </div>
          <div className="col-md-12  founder">
            <Founder />
          </div>
          <div id="program" className="col-md-12 baris3 mb-5">
            <Content31 />
          </div>
          <div id="portofolio" className="col-md-12 portofolio mt-5">
            <Lokasi />
          </div>
          {/* <div id="instructor" className="col-md-12 instructor">
            <InstructorJS />
          </div> */}
          <div id="portofolio" className="col-md-12 portofolio">
            <PortofolioContainer />
          </div>
          <div id="testimoni" className="col-md-12 testimoni mt-5">
            <Testimoni />
          </div>
          <div id="contact" className="col-md-12 footer">
            <Footer />
          </div>
          <div className="col-md-12 copyright">
            <Copyright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNavbar(Home);
