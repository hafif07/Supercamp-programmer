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
import Content31 from "./Content3(revisi)/Content31";
import InstructorJS from "./Instructor/InstructorJS";


const Home = () => {
  return (
    <div className="box">
      <Caraousel />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 mt-5 baris1 ">
            <Content1 />
          </div>
          <div className="col-md-12 mt-5 baris2">
            <Content2 />
          </div>
          <div className="col-md-12  founder">
            <Founder />
          </div>
          <div className="col-md-12 baris3">
           <Content31/>
          </div>
          <div className="col-md-12 instructor">
            <InstructorJS/>
          </div>
          <div className="col-md-12 footer">
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
