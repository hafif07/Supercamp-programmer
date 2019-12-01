import React from "react";
import web2 from "../../../Assets/portofolio/muslim-chat.jpg";
import web3 from "../../../Assets/portofolio/g-chat-lp.jpg";
import web4 from "../../../Assets/portofolio/osans-lp.png";
import web5 from "../../../Assets/portofolio/osans.jpg";
import web6 from "../../../Assets/portofolio/osans.png";
import web7 from "../../../Assets/portofolio/aiwah.png";
import web8 from "../../../Assets/portofolio/beta.png";

const Portofolio = () => {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <h1>Portofolio</h1>
      </div>
      <div className="col-md-12 mt-5">
        <div className="card-columns">
          <div className="card">
            <img src={web2} className="card-img-top" alt="..." />
          </div>
          <div className="card">
            <img src={web3} className="card-img-top" alt="..." />
          </div>
          <div className="card">
            <img src={web4} className="card-img-top" alt="..." />
          </div>
          <div className="card text-center">
            <img src={web5} className="card-img-top" alt="..." />
          </div>
          <div className="card">
            <img src={web6} className="card-img-top" alt="..." />
          </div>
          <div className="card p-3 text-right">
            <img src={web7} className="card-img-top" alt="..." />
          </div>
          <div className="card">
            <img src={web8} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
