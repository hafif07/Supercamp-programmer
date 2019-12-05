// import React from 'react'
import "./Lokasi.scss";
import ScrollAnimation from "react-animate-on-scroll";

//  const Lokasi = () => {
//     return (
//         <div className="col-md-12 justify-content-center text-center lokasi">
//             <div>
//                 <ScrollAnimation animateIn="fadeInDown">
//                 <h1>Lokasi</h1>
//                 </ScrollAnimation>
//             </div>
//             <div className="div">
//                 <h1>Null</h1>
//             </div>
//         </div>
//     )
// }
// export default Lokasi

import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class Lokasi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{ latitude: -7.9963343, longitude: 110.2953811 }]
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("disini pondok programmer")}
        />
      );
    });
  };

  render() {
    return (
      <div className="col-md-12 justify-content-center text-center lokasi">
        <div>
          <ScrollAnimation animateIn="fadeInDown">
            <h1>Lokasi</h1>
          </ScrollAnimation>
        </div>
        <div className="div">
          <div className="map-lokasi">
            <Map
              google={this.props.google}
              zoom={15}
              style={mapStyles}
              initialCenter={{ lat: -7.9963343, lng: 110.2953811 }}
            >
              {this.displayMarkers()}
            </Map>
          </div>
          <div className="kosong"></div>
        </div>
      </div>
    );
  }
}

const mapStyles = {
  width: "100%",
  height: "80vh",
  position: "relative",
  display: "flex"
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCiQsfSEuNjCSgDv_CzL5yd5O5mikFZdKs"
})(Lokasi);
