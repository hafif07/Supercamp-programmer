import React from "react";
import "./Fasilitas.scss";
import Fasilitass from  "./Fasilitas.json"

const Fasilitas = () => {
  return (
    <div className="row mt-5 fasilitas justify-content-center text-center">
      <div className="col-md-12">
        <h1>Fasilitas Peserta</h1>
      </div>
      <div className="col-md-10">
        <div className="row ">
            {Fasilitass.Fasilitas.map((data,index) => (
                <div className="col-md-4 mt-5">
                    {/* content card open */}
                            <div className="card" key={index} >
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
