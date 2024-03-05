
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './routers/About';
import { Contact } from './routers/Contact';
import { Header } from './Header';
import React from 'react';


function App() {

  return <>
    <Header />
    <Routes>
      <Route path='/' element={<h3>Welcome Homepage</h3>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<h3>Page Not Found</h3>} />
    </Routes>
  </>
}

export default App;
