import React from "react";
import "./AlurDaftar.scss";

const AlurDaftar = () => {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-12 text-center mt-5 mb-5">
          <h1>Alur pendaftaran Supercamp Programmer</h1>
        </div>
        <div className="col-md-12">
          <section className="section">
            <div className="container">
              <div className="timeline">
                <div className="row mt-3">
                  <div className="col-lg-6 pr-5">
                    <div className="card shadow">
                      <div className="card-header text-right">Steps 1</div>
                      <div className="card-body">
                        <h5>MENGISI FORMULIR</h5>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pl-5"></div>
                </div>
                {/*end row*/}
                <div className="row mt-3">
                  <div className="col-lg-6 pr-5"></div>
                  <div className="col-lg-6 pl-5">
                    <div className="card shadow">
                      <div className="card-header text-right">Steps 2</div>
                      <div className="card-body">
                        <h5>TUNGGU KONFIRMASI ADMIN</h5>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                {/*end row*/}
                <div className="row mt-3">
                  <div className="col-lg-6 pr-5">
                    <div className="card shadow">
                      <div className="card-header text-right">Steps 3</div>
                      <div className="card-body"><h5>DATANG KE LOKASI</h5></div>
                    </div>
                  </div>
                  <div className="col-lg-6 pl-5"></div>
                </div>
                {/*end row*/}
                <div className="row mt-3">
                  <div className="col-lg-6 pr-5"></div>
                  <div className="col-lg-6 pl-5">
                    <div className="card shadow">
                      <div className="card-header text-right">Steps 4</div>
                      <div className="card-body"><h5>INTERVIEW</h5></div>
                    </div>
                  </div>
                </div>
                {/*end row*/}
                <div className="row mt-3">
                  <div className="col-lg-6 pr-5">
                    <div className="card shadow">
                      <div className="card-header text-right">Steps 5</div>
                      <div className="card-body"><h5>MELAKUKAN PEMBAYARAN DI TEMPAT</h5></div>
                    </div>
                  </div>
                  <div className="col-lg-6 pl-5"></div>
                </div>
                {/*end row*/}
              </div>
              {/*end timeline*/}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AlurDaftar;
