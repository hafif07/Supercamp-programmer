import React from 'react'
import './Lokasi.scss'

const Lokasi = () => {
  return (
    <div className='row d-flex justify-content-center'>
      <div className='col-md-12 text-center mb-5'>
        <h1>Lokasi</h1>
      </div>
      <div className='cpl-md-12 map justify-content-center'>
        <iframe
        title="myFrame"
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15804.100801340894!2d110.2953811!3d-7.9963343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa1d804786b054aa6!2sPondok%20Programmer!5e0!3m2!1sid!2sid!4v1575535213892!5m2!1sid!2sid'
          width={1200}
          height={500}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default Lokasi
