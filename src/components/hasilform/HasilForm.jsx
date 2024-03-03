// HasilForm.js
import React, { useState } from 'react';
import './HasilForm.css';

const HasilForm = ({ data }) => {
  const [tableData, setTableData] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  const handleDelete = (index) => {
    if (!isLocked) {
      const newData = [...tableData];
      newData.splice(index, 1);
      setTableData(newData);
    }
  };

  const handleAdd = () => {
    if (!isLocked) {
      setTableData([...tableData, data]);
    }
  };

  const handleLock = () => {
    setIsLocked(true);
  };

  return (
    <div className="hasil-form">
      <h2>Hasil Pengisian Form</h2>
      <table>
        <thead>
          <tr>
            <th>Nama Penyewa</th>
            <th>Nomor Telepon</th>
            <th>Jadwal Booking</th>
            <th>Tanggal</th>
            <th>Jam</th>
            <th>Durasi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              <td>{rowData.nama}</td>
              <td>{rowData.nomorTelp}</td>
              <td>{rowData.lapangan}</td>
              <td>{rowData.tanggal}</td>
              <td>{rowData.jam}</td>
              <td>{rowData.durasi}</td>
              <td>
                {index === 0 ? (
                  <span>Cannot Delete</span>
                ) : (
                  <button onClick={() => handleDelete(index)}>Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!isLocked && (
        <div>
          <button onClick={handleAdd}>Add Row</button>
          <button onClick={handleLock}>Lock Table</button>
        </div>
      )}
    </div>
  );
};

export default HasilForm;
