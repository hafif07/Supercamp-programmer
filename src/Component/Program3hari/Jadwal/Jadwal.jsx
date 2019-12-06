import React from 'react'
import './Jadwal.scss'
import ScrollAnimation from 'react-animate-on-scroll'

const Jadwal = props => {
  return (
    <div className='col-md-12'>
      <div className='col-md-12 mt-5 text-center jadwal '>
        <ScrollAnimation animateIn='fadeInDown'>
          <h1>Jadwal Pelatihan</h1>
          <h2>Februari 2020</h2>
        </ScrollAnimation>
      </div>
      <div className='col-md-12 mt-5 table-jadwal'>
        <ScrollAnimation animateIn='fadein'>
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col' />
                <th scope='col'>Tanggal</th>
                <th scope='col'>Pelatihan</th>
                <th scope='col'>Durasi</th>
                <th scope='col'>Waktu</th>
                <th scope='col'>Sisa Kuota</th>
                <th scope='col'>Status</th>
              </tr>
            </thead>
            <tbody>
              {props.isLoading === true   ? (
                <div className="container-fluid">
                <div className='lds-facebook '>
                  <div />
                  <div />
                  <div />
                  </div>
                </div>
                
              ) : (
                props.dataTable.map((res, index) => (
                  <tr key={res.id}>
                    {/* <th scope='row'>{res.gelombang}</th>
                  <td>{res.tanggal}</td> */}
                    {res.class_month === '1' && res.class_duration === '1' ? (
                      <>
                        <th scope='row'>Gelombang {res.class_wave}</th>
                        <td>{res.date} February</td>
                        <td>{res.subject}</td>
                        <td>3 Hari</td>
                        <td>08.00 - 16.00</td>
                        <td>{res.quota}</td>
                        <td
                          className={
                            res.status === 'Tersedia'
                              ? 'text-success'
                              : 'text-danger'
                          }
                        >
                          {res.status === 'Tersedia'
                            ? 'Available'
                            : 'Not Available'}
                        </td>
                      </>
                    ) : null}

                    {/* <td>{res.durasi}</td>
                  <td>{res.waktu}</td>
                  <td>{res.sisa}</td>
                  <td className='color-title'>
                    <h5>{res.status} </h5>{' '}
                  </td> */}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Jadwal
