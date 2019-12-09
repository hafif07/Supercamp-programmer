import React from 'react'
import NavbarProgram from '../Program3hari/Navbar/Navbar3hari'
import Program from '../../Component/Program/Program'
import Data from "./Data.json"
import image from "./Data"

const BebasBiaya = () => {
  return (
    <>
      <NavbarProgram />
      <div className='container-fluid berbayar-container'>
        <div className='row'>
          <Program
            title='Program Bebas Biaya'
            title2="Produk Pelayanan Pelatihan"
            text={Data.Data.isinya}
            Data={ image.Datas}
          />
        </div>
      </div>
    </>
  )
}

export default BebasBiaya