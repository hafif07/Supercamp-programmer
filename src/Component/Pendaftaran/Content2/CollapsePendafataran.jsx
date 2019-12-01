import React from "react";
import "./CollapsePendaftaran.scss";

const CollapsePendaftaran = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Program 3 hari
            </button>
          </h2>
        </div>
        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="card card-keterangan"
                  style={{ width: "18rem" }}
                >
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    className="card-img-top rounded mx-auto d-block "
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">React Js</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <p href="#" className="btn btn-primary">
                      Daftar
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="card card-keterangan"
                  style={{ width: "18rem" }}
                >
                  <img
                    src="https://toppng.com/public/uploads/thumbnail/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994bz4gmmu3qd.png"
                    className="card-img-top rounded mx-auto d-block mt-2"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">React Native</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <p href="#" className="btn btn-primary">
                      Daftar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Program 1 bulan
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <h1 className="text-center">Coming Soon</h1>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Program 3 bulan
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <h1 className="text-center">Coming Soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsePendaftaran;
