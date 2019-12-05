import React from 'react'
import "./TablePendaftaran.scss"

const ContentPendafataran = () => {
  return (
    <>
      <div className='row label'>
        <div className='col-md-12 title-h'>
          <h1>Pendaftaran</h1>
        </div>
        <div className='col-md-12 mt-4'>
          <form>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Nama Lengkap</label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nama Lengkap'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>
                Tempat, Tanggal Lahir
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Tempat, Tanggal Lahir'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Kota</label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  placeholder='Kota'
                  className='form-control'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Alamat Lengkap</label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Alamat Lengkap'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>No Identitas</label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='KTP/SIM/PASSPORT'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>No WA</label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='No WA'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Program</label>
              <div className='col-sm-10'>
                <select className='form-control'>
                  <option>Pilih</option>
                  <option>React Js Redux</option>
                  <option>React Native Redux</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Waktu</label>
              <div className='col-sm-10'>
                <select className='form-control'>
                  <option>Pilih</option>
                  <option>Gelombang 1</option>
                  <option>Gelombang 2</option>
                  <option>Gelombang 3</option>{' '}
                  <option>Gelombang 4</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Foto</label>
              <div className='col-sm-10'>
                <input type='file' className='' placeholder='No WA' />
              </div>
              <img style={{width:"200px", height:"200px"}} src={} alt="" />>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Ukuran Kaos</label>
              <div className='col-sm-10'>
                <select className='form-control'>
                  <option>Pilih</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
              </div>
            </div>
         
            <button className="btn btn-success mt-4 float-right">Kirim</button>
       
          </form>
        </div>
      </div>
    </>
  )
}

export default ContentPendafataran
