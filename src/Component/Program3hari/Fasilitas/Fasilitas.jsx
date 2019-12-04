import React from "react";
import "./Fasilitas.scss";
import data from  "./data.json"
import ScrollAnimation from "react-animate-on-scroll"

const Fasilitas = () => {
  return (
    <div className="row mt-5 fasilitas justify-content-center text-center">
      <div className="col-md-12">
        <ScrollAnimation animateIn="fadeInDown">
        <h1>Fasilitas Peserta</h1>
        </ScrollAnimation>
      </div>
      <div className="col-md-10">
        <div className="row ">
            {data.Fasilitass.map((data,index) => (
                <div className="col-md-4 mt-5" key={index}>
                    {/* content card open */}
                            <div className="card"  >
                                <i className={data.img}></i>
                              
                                <div className="card-body">
                                <p className="card-text">
                                    {data.text}
                                </p>
                                </div>
                            </div>
                        
                {/* content card close */}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Fasilitas;
