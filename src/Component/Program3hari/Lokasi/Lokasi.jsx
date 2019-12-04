import React from 'react'
import "./Lokasi.scss"
import ScrollAnimation from "react-animate-on-scroll"

 const Lokasi = () => {
    return (
        <div className="col-md-12 justify-content-center text-center lokasi">
            <div>
                <ScrollAnimation animateIn="fadeInDown">
                <h1>Lokasi</h1>
                </ScrollAnimation>
            </div>
            <div className="div">
                <h1>Null</h1>
            </div>
        </div>
    )
}
export default Lokasi