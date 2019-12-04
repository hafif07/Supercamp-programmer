import React from "react";
import "./Deskripsi.scss";

const Deskripsi = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-12 h1-desc">
        <h1 className="text-center">Program 3 Hari</h1>
      </div>
      <div className="col-md-12 d-flex justify-content-center card-desc">
        <div className="card ">
          <div className="card-body">
            <p className="text-center">
              Program ini ditujukan bagi kamu yang sudah memahami bahasa
              pemrograman dasar dan framework . Kamu akan diberikan pelatihan
              untuk dapat menggunakan fitur-fitur atau third part library
              tertentu dari suatu framework .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deskripsi;
