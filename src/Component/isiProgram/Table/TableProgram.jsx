import React from 'react'
import Data from "./Data.json"

const TableProgram = () => {
        return(
    <>
    <div style={{overflowX:"auto"}} className="table-box">
    <table  className="table mt-4">
            <thead className="thead-dark">
            <tr>
                <th scope="col"></th>
                <th scope="col">Tanggal</th>
                <th scope="col">Sisa Kuota</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
                {Data.Data.map(res => (
                    <tr>
                <th scope="row">{res.gelombang}</th>
                <td>{res.tanggal}</td>
                <td>{res.sisa}</td>
                <td style={{color:"green"}}>{res.status}</td>
            </tr>
                ))}
            
            </tbody>
        </table>
        </div>
    </>
        )
}

export default TableProgram