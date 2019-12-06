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
              {props.dataTable.map(res => (
                <tr key={res.id}>
                  {/* <th scope='row'>{res.gelombang}</th>
                  <td>{res.tanggal}</td> */}
                  {res.class_month === '1' && res.class_year === '2020' ? (
                    <>
                      <th scope='row'>Gelombang {res.id}</th>
                      <td>
                        {res.class_date === '1' ? '1 - 3' : null}
                        {res.class_date === '2' ? '8-10' : null}
                        {res.class_date === '3' ? '15-17' : null}
                        {res.class_date === '4' ? '22-24' : null} February
                      </td>
                      <td>{res.subject}</td>
                      <td>3 Hari</td>
                      <td>08.00 - 16.00</td>
                      <td>{res.quota}</td>
                      <td
                        className={
                          res.status === '0' ? 'text-success' : 'text-danger'
                        }
                      >
                        {res.status === '0' ? 'Available' : 'Not Available'}
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
              ))}
            </tbody>
          </table>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Jadwal
