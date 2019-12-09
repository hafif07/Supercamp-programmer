import React from 'react'
import './AlurPendaftaran.scss'
import Data from './Data.json'

const AlurPendaftaran = () => {
    return (
        <div className='col-md-12'>
        <div className='row d-flex justify-content-center row-alur'>
            {Data.Data.map((res, index) => (
            <div key={res.id} className='card ml-4'>
                <div className='card-body'>
                <img
                    className='alur-img'
                    data-toggle='tooltip'
                    data-placement={res.data}
                    title={res.title}
                    src={res.img}
                    alt=''
                />
                <p className="text-p">{index + 1}. {res.text}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}

export default AlurPendaftaran
