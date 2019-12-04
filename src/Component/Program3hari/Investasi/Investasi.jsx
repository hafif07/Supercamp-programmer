import React from 'react'
import "./Investasi.scss"


const Investasi = () => {
    return(
<div className="row mt-5">
    <div className="col-md-12 mb-5 text-center card-bg d-flex justify-content-center">
        <div className="card" style={{width:"50rem"}}>
            <div className="card-header">
            <h1>Investasi Pelatihan</h1>
            </div>
            <div className="body">
            <h1>Rp 300.000,00</h1>
            </div>
        </div>

      
    </div>
    <div className="col-md-12 mt-5 d-flex justify-content-center mb-5 bg-daftar">
        <div className="card " style={{width:"20rem"}}>
            <div className="card-body text-center">
                <h3>Daftar Sekarang</h3>
            </div>
        </div>
    </div>
</div>
    )
}

export default Investasi