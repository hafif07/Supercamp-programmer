import React from "react";
import data from "./data.json";
import "./Jadwal.scss";
import ScrollAnimation from "react-animate-on-scroll"

const Jadwal = () => {
  return (
    <div className="col-md-12">
      <div className="col-md-12 mt-5 text-center jadwal ">
        <ScrollAnimation animateIn="fadeInDown">
          <h1>Jadwal Pelatihan</h1>
        </ScrollAnimation>
        
      </div>
      <div className="col-md-12 mt-5 table-jadwal">
        <ScrollAnimation animateIn="fadein">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Tanggal</th>
              <th scope="col">Pelatihan</th>
              <th scope="col">Durasi</th>
              <th scope="col">Waktu</th>
              <th scope="col">Sisa Kuota</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.Jadwals.map(res => (
              <tr key={res.id}>
                <th scope="row">{res.gelombang}</th>
                <td>{res.tanggal}</td>
                <td>{res.pelatihan}</td>
                <td>{res.durasi}</td>
                <td>{res.waktu}</td>
                <td>{res.sisa}</td>
                <td className="color-title">
                  <h5>{res.status} </h5>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Jadwal;
