import React from 'react'
import "./Investasi.scss"
import ScrollAnimation from "react-animate-on-scroll"
import {Link} from "react-router-dom"


const Investasi = () => {
    return(
<div className="row mt-5">
    <div className="col-md-12 mb-5 text-center card-bg d-flex justify-content-center">
        <ScrollAnimation animateIn="fadeIn">
        <div className="card crd">
            <div className="card-header">
            <h1>Investasi Pelatihan</h1>
            </div>
            <div className="body">
            <h1>Rp 300.000,00</h1>
            </div>
        </div>
        </ScrollAnimation>

      
    </div>
    <div className="col-md-12 mt-5 d-flex justify-content-center mb-5 bg-daftar">
        <div className="card ">
            <ScrollAnimation animateIn="tada">
                <Link to="/pendaftaran">
            <div className="card-body text-center">
                <h3>Daftar Sekarang</h3>
            </div>
            </Link>
            </ScrollAnimation>
        </div>
    </div>
</div>
    )
}

export default Investasi