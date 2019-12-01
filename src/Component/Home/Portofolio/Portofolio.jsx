import React from "react";
// import web2 from "../../../Assets/portofolio/muslim-chat.jpg";
// import web3 from "../../../Assets/portofolio/g-chat-lp.jpg";
// import web4 from "../../../Assets/portofolio/osans-lp.png";
// import web5 from "../../../Assets/portofolio/osans.jpg";
// import web6 from "../../../Assets/portofolio/osans.png";
// import web7 from "../../../Assets/portofolio/aiwah.png";
// import web8 from "../../../Assets/portofolio/beta.png";
import Data from "./Data.json";
import "./Portofolio.scss";

const Portofolio = props => {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <h1>Portofolio</h1>
      </div>
      <div className="col-md-12 mt-5">
        <div className="card-columns">
          {Data.Data.map(img => (
            <div key={img.id} className="card porto-card">
              <img
                onClick={() => props.handleChange(img)}
                ut
                src={img.img}
                className="card-img-top"
                alt="..."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
