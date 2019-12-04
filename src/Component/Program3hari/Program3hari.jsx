import React from "react";
import "./Program3hari.scss";
import NavbarProgram from "./Navbar/Navbar3hari";
import ArrowHeader from "./ArrowHeader/ArrowHeader";
import Deskripsi from "./Deskripsi/Deskripsi";
import ProdukLayanan from "./ProdukLayanan/ProdukLayanan";
import Persyaratan from "./Persyaratan/Persyaratan";
import Fasilitas from "./Fasilitas/Fasilitas";
import Jadwal from "./Jadwal/Jadwal";
import Lokasi from "./Lokasi/Lokasi";
import CaraDaftar from "../Cara-Daftar/caraDaftar";
import AlurDaftar from "./Alur Daftar/AlurDaftar";

const Program3hari = () => {
  return (
    <>
      <NavbarProgram />
      <div className="container-fluid box-program-3-hari">
        <div className="row">
          <div className="col-md-12">
            <ArrowHeader />
          </div>
          <div className="col-md-12">
            <Deskripsi />
          </div>
          <div className="col-md-12">
            <ProdukLayanan />
          </div>
          <div className="col-md-12">
            <Persyaratan />
          </div>
          <div className="col-md-12">
            <Fasilitas />
          </div>
          <div className="col-md-12">
            <Jadwal />
          </div>
          <div className="col-md-12">
            <Lokasi />
          </div>
          <div className="col-md-12">
           <AlurDaftar/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program3hari;
