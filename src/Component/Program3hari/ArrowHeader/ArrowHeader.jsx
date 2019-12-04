import React from "react";
import "./ArrowHeader.scss";
import { Link } from "react-router-dom";

const ArrowHeader = () => {
    return (
        <div className="row mt-2">
        <div  className="col-md-12 arrow ">
            <div className="row d-flex justify-content-between ml-3 mr-3">
            <div className=" fixed-top ml-5 mt-5">
                <Link to="/">
                <i className="fa fa-arrow-left arrow-icon"></i>
                  <i className="fa fa-arrow-circle-left circle-icon"></i>
                
                </Link>
            </div>
            {/* <div className="card float-right">
                <div className="card-body text-center">
                <h5>DAFTAR SEKARANG</h5>
                <p>Rp 300.000</p>
                </div>
            </div> */}
            </div>
        </div>
        </div>
    );
};

export default ArrowHeader;
