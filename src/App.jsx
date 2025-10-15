import * as React from 'react';

import './App.css'
import {  Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ResumeGenenerator from './pages/ResumeGenenerator';
import PageNotFound from './pages/PageNotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './pages/Form';
import History from './pages/History';

function App() {
 

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/resume' element={<ResumeGenenerator/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/*' element={<PageNotFound/>} />

      </Routes>

      <Footer/>
    
    </>
  )
}

export default App
