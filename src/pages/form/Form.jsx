// Form.js
import React, { useState } from 'react';
import "./Form.css"
const Form = () => {
  const [nama, setNama] = useState('');
  const [nomorTelp, setNomorTelp] = useState('');
  const [lapangan, setLapangan] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [durasi, setDurasi] = useState('');
  const [jam, setJam] = useState('');

  const handleSubmit = () => {
    console.log('Data Penyewa:');
    console.log('Nama: ' + nama);
    console.log('Nomor Telepon: ' + nomorTelp);
    console.log('Jadwal Booking: ' + lapangan);
    console.log('Tanggal: ' + tanggal);
    console.log('Durasi: ' + durasi);
    console.log('Jam: ' + jam);
  };

  const handleDurasiChange = (e) => {
    setDurasi(e.target.value);
  };

  const handleJamChange = (e) => {
    setJam(e.target.value);
  };

  return (
    <div className="App">
      <h1>Form Booking Lapangan Futsal</h1>
      <label>Nama Penyewa:</label>
      <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />

      <label>Nomor Telepon:</label>
      <input type="text" value={nomorTelp} onChange={(e) => setNomorTelp(e.target.value)} />
      <br />

      <label>Jadwal Booking:</label>
      <select value={lapangan} onChange={(e) => setLapangan(e.target.value)}>
        <option value="">Pilih Lapangan</option>
        <option value="Lapangan A">Lapangan A</option>
        <option value="Lapangan B">Lapangan B</option>
        <option value="Lapangan C">Lapangan C</option>
      </select>

      <label>Tanggal:</label>
      <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />

      <label>Durasi:</label>
      <input type="text" value={durasi} onChange={handleDurasiChange} />

      <label>Jam:</label>
      <input type="text" value={jam} onChange={handleJamChange} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
