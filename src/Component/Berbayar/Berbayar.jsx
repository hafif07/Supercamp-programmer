import React from 'react'
import NavbarProgram from '../Program3hari/Navbar/Navbar3hari'
import './Berbayar.scss'
import Program from '../../Component/Program/Program'
import Data from './Data.json'
import image from './Data'
import { Link } from 'react-router-dom'

const Berbayar = () => {
  return (
    <>
      <NavbarProgram />
      <Link to='/'>
        <i
          className='fa fa-arrow-left left-arrow'
          data-toggle='tooltip'
          data-placement='right'
          title='Back'
        />
      </Link>
      <div className='container-fluid berbayar-container'>
        <div className='row'>
          <Program
            title='Program Berbayar'
            title2='Produk Pelayanan Pelatihan'
            text={Data.Data.isi}
            Data={image.Datas}
          />
        </div>
      </div>
    </>
  )
}

export default Berbayar
