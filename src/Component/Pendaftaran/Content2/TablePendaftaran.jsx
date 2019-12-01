import React from "react";

const ContentPendafataran = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h1>Pendaftaran</h1>
        </div>
        <div className="col-md-12 mt-4">
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Nama Lengkap</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama Lengkap"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Tempat, Tanggal Lahir
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tempat, Tanggal Lahir"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Kota</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  placeholder="Kota"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Alamat Lengkap</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Alamat Lengkap"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">No Identitas</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="KTP/SIM/PASSPORT"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">No WA</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="No WA"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Waktu</label>
              <div className="col-sm-10">
                <select className="form-control">
                  <option>Pilih</option>
                  <option>Pagi</option>
                  <option>Siang</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Foto</label>
              <div className="col-sm-10">
                <input type="file" className="" placeholder="No WA" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContentPendafataran;
