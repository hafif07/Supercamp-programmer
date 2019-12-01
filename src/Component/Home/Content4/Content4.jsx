import React from "react";
import "./Content4.scss";

const Content4 = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="card card-persyaratan" >
            <div className="card-body card-background ">
              <p className="card-title">Persyaratan</p>
              <ul className="list-group">
                <li className="list-group-item list-persyaratan">1. Cras justo odio</li>
                <li className="list-group-item list-persyaratan">2. Dapibus ac facilisis in</li>
                <li className="list-group-item list-persyaratan">3. Morbi leo risus</li>
                <li className="list-group-item list-persyaratan">4. Porta ac consectetur ac</li>
                <li className="list-group-item list-persyaratan">5. Vestibulum at eros</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content4;
