import React from "react";
import "./Persyaratan.scss";

const Persyaratan = () => {
  return (
    <div className="row">
      <div className="col-md-12 text-center mb-5 h1-ps">
        <h1>Persyaratan Peserta</h1>
      </div>
      <div
        className="col-md-12 list d-flex justify-content-around
      "
      >
        <ul className="list-group col-md-8  ">
          <li className="list-group-item ">
            Punya passion di bidang programming atau sudah pernah belajar
            programming sebelumya
          </li>
          <li className="list-group-item">Mempunyai semangat dalam belajar</li>
          <li className="list-group-item">Memiliki laptop</li>
        </ul>
      </div>
    </div>
  );
};

export default Persyaratan;
