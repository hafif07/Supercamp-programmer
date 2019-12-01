import React from "react";
import "./Content3.scss";

const Content3 = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 text-center mt-5">
          <h1>Text Title</h1>
          <div className="card card-text-title">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit
              voluptate fugiat, tenetur quia, placeat id dignissimos inventore
              ratione sed sunt labore eum mollitia commodi non modi enim odio
              quisquam?
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-center">Program</h1>
              <div className="d-flex d-row justify-content-around mt-5 mb-5 card-rincian">
                {/* //card */}
                <div className="card" style={{ width: "18rem" }}>
                  <i className="fas fa-code"></i>
                  <div className="card-body">
                    <h5 className="card-title">Program 3 hari </h5>
                    <p className="card-text">
                      Program singkat yang mencangkup satu materi dalam suatu
                      framework dari teknologi yang digunakan.
                    </p>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <i className="fas fa-laptop"></i>
                  <div className="card-body">
                    <h5 className="card-title"> Program 1 bulan </h5>
                    <p className="card-text">
                      Program ini ditujukan untuk para programmer yang sudah
                      mengerti fundamental bahasa pemrogramman yang digunakan
                      lalu masuk ke tahap menggunakan framework
                    </p>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <i className="fas fa-comments"></i>
                  <div className="card-body">
                    <h5 className="card-title">Program 3 bulan </h5>
                    <p className="card-text">
                      Program ini ditujukan untuk pemula yang baru terjun ke
                      dalam dunia pemrogramman , dimana nanti akan kami didik
                      dari 0 hingga mampu membuat aplikasi serta langsung
                      penyaluran kerja ke perusahaan rekanan kami
                    </p>
                  </div>
                </div>
                {/* //card */}
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="text-center">Fasilitas</h1>
              <div className="row card-fasilitas mt-5">
                <div className="col-md-12">
                  <div className="d-flex justify-content-center">
                    {/* //card */}
                    <div className="card" style={{ width: "15rem" }}>
                      <i className="fas fa-school"></i>
                      <div className="card-body">
                        <h5 className="card-title">Asrama</h5>
                      </div>
                    </div>
                    <div className="card" style={{ width: "15rem" }}>
                      <i className="fas fa-utensils"></i>
                      <div className="card-body">
                        <h5 className="card-title">Makan 3x sehari</h5>
                      </div>
                    </div>
                    <div className="card" style={{ width: "15rem" }}>
                      <i className="fas fa-wifi"></i>
                      <div className="card-body">
                        <h5 className="card-title">Koneksi Internet 24 jam</h5>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex justify-content-center">
                    <div className="card" style={{ width: "15rem" }}>
                      <i className="fas fa-star-and-crescent"></i>
                      <div className="card-body">
                        <h5 className="card-title">Lingkungan Islami</h5>
                      </div>
                    </div>
                    <div className="card" style={{ width: "15rem" }}>
                      <i className="fas fa-book-reader"></i>
                      <div className="card-body">
                        <h5 className="card-title">Intensive Training</h5>
                      </div>
                    </div>
                    <div className="card" style={{ width: "15rem" }}>
                      <i className="fas fa-running"></i>
                      <div className="card-body">
                        <h5 className="card-title">Olahraga</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
