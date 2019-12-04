import React from "react";
import Jadwals from "./Jadwal.json";
import "./Jadwal.scss";

const Jadwal = () => {
  return (
    <div className="col-md-12">
      <div className="col-md-12 mt-5 text-center jadwal ">
        <h1>Jadwal Pelatihan</h1>
      </div>
      <div className="col-md-12 mt-5">
        <table class="table">
          <thead class="thead-dark">
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
            {Jadwals.Jadwal.map(data => (
              <tr key={data.id}>
                <th scope="row">{data.gelombang}</th>
                <td>{data.tanggal}</td>
                <td>{data.pelatihan}</td>
                <td>{data.durasi}</td>
                <td>{data.waktu}</td>
                <td>{data.sisa}</td>
                <td className="color-title">
                  <h5>{data.status} </h5>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jadwal;
