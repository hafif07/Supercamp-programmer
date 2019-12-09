import React from "react";
import "./Program.scss";
// import Data from './Data.json'

const Program = props => {
  return (
    <>
      <div className="col-md-12 text-center mt-5">
        <h1>{props.title}</h1>
      </div>
      <div className="col-md-12 text-center d-flex justify-content-center card-program-component">
        <div className="card">
          <div className="card-body">{props.text}</div>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <h1>{props.title2}</h1>
      </div>
      <div className="col-md-12 card-isinya mt-5 mb-5">
        <div className="row text-center d-flex justify-content-center">
          {props.Data.map(res => (
            <div className="card ml-5 mb-5">
              <img src={res.img} alt="" />
              <div className="card-body">
                <p>{res.title}</p>
                <button style={{ width: "70%" }} className={res.btn}>
                  {res.titleBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Program;
