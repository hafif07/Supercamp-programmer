import React from 'react'
import NavbarProgram from '../Program3hari/Navbar/Navbar3hari'
import './Berbayar.scss'
import Program from '../../Component/Program/Program'
import Data from "./Data.json"
import image from "./Data"

const Berbayar = () => {
  return (
    <>
      <NavbarProgram />
      <div className='container-fluid berbayar-container'>
        <div className='row'>
          <Program
            title='Program Berbayar'
            title2="Produk Pelayanan Pelatihan"
            text={Data.Data.isi}
            Data={image.Datas}
          />
        </div>
      </div>
    </>
  )
}

export default Berbayar
