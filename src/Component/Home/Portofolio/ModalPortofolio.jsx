import React from "react";
import web2 from "../../../Assets/portofolio/muslim-chat.jpg";

const ModalPortofolio = () => {
  return (
    <>
      <div
        className="modal fade bd-example-modal-xl"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
              <img src={web2} alt=""/>
          </div>s
        </div>
      </div>
    </>
  );
};

export default ModalPortofolio;
