import React, { useState } from 'react';
import { Film, Films, Link, Logo, SignIn, User } from './components';
import { Home } from './components/_media';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FilmCard } from './components/Films/FilmCard';

// 5b253f23

// http://www.omdbapi.com/?apikey=5b253f23&s=star

// QVC1ZB2-T0K4224-NS3TA7F-6SXFKPN

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Films />} />
          <Route path=':id' element={<Film />}/>
          <Route path='/signIn' element={<SignIn />} />
          <Route path="*" element={<div>WrongPage</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
