import React from 'react'
import Navbar from '../Program3hari/Navbar/Navbar3hari'
import './IsiProgram.scss'
import Data from './Data.json'
import TableProgram from '../isiProgram/Table/TableProgram'
import AlurPendaftaran from './Alur Pendaftaran/AlurPendaftaran'
import Copyright from '../Copyright/Copyright'

const IsiProgram = () => {
    return (
        <>
        <div className='box '>
            <Navbar />
            <i className='fa fa-arrow-left left-arrow' data-toggle="tooltip" data-placement="right" title="Back" />
            <div className='container isi-program '>
            <div className='row row-isiprogram '>
                <div className='col-md-12 mt-5'>
               
                <h1>Membuat Website Responsive</h1>
                </div>
                <div className='col-md-12 isi-program-img mt-5'>
                <div className='row '>
                    <div className='col-md-4 '>
                    <img
                        src='https://c363.pcloud.com/dpZkyePYhZCq2pUhZgNtoZZQu3UN7Z3VZZQ1kZXZJDTEObLR3oLTWec72IO0QVB3xE57/th-17572514526-350x350.png'
                        alt=''
                        className='img-isi'
                    />
                    </div>
                    <div className='col-md-6 list-program-icon'>
                    <ul className='list-group'>
                        {Data.Data.map((res, index) => (
                        <li key={res.id} className='list-group-item'>
                            <h6>
                            {' '}
                            <img
                                className='img-pict1'
                                src={res.img}
                                alt=''
                            />{' '}
                            {res.title}
                            </h6>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                </div>
                <div className='col-md-12 mb-4 mt-4 list-program'>
                <h1>Pengenalan Pelatihan</h1>
                <div className='card'>
                    <p className='mt-5'>
                    Pelatihan ini akan membahas dasar - dasar pengembangan sebuah
                    website, dimana para peserta akan diberikan pelatihan dasar
                    sebagai berikut :
                    </p>
                    <ul className='list-group'>
                    {Data.pengenalan.map(res => (
                        <li key={res.id} className='list-group-item'>
                        <p>
                            <i className='fa fa-circle' /> {res.title}
                        </p>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
                <div className='col-md-12 mb-4 mt-4  list-program'>
                <h1>Persayaratan Peserta</h1>
                <ul className='list-group'>
                    {Data.persyaratan.map(res => (
                    <li key={res.id} className='list-group-item'>
                        <p>
                        <i className='fa fa-circle' /> {res.title}
                        </p>
                    </li>
                    ))}
                </ul>
                </div>
                <div className='col-md-12 mb-4 mt-4  list-program'>
                <h1>Fasilitas Peserta</h1>
                <ul className='list-group'>
                    {Data.fasilitas.map(res => (
                    <li key={res.id} className='list-group-item'>
                        <p>
                        <i className='fa fa-circle' /> {res.title}
                        </p>
                    </li>
                    ))}
                </ul>
                </div>
                <div className='col-md-12 text-center'>
                <h1>Jadwal Pelatihan</h1>
                <h5>Februari 2020</h5>
                <TableProgram />
                </div>
                <div className='col-md-12 mt-4'>
                <h1>Alur Pendaftaran</h1>
                <AlurPendaftaran />
                </div>
                <div className='col-md-12 text-center inves'>
                <h1>Investasi Pelatihan</h1>
                <div
                    style={{ background: '#1C3864' }}
                    className='card card-harga'
                >
                    <h5>Rp 200.000,00</h5>
                </div>
                <button
                    style={{ background: '#1C3864' }}
                    className='btn mt-5 btn-bg-isi'
                >
                    {' '}
                    <i className='fa fa-edit' /> Daftar Sekarang
                </button>
                </div>
            </div>
            </div>
        </div>
        <Copyright />
        </>
    )
}

export default IsiProgram
