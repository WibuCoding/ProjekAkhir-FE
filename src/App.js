import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Form from './pages/form/Form';
import HasilForm from './components/hasilform/HasilForm';
import Footer from './components/footer/Footer';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <Header />
      <Form onSubmit={handleFormSubmit} />
      {formData && <HasilForm data={formData} />}
      <Footer />
    </div>
  );
}

export default App;
