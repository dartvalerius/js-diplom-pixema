import React, { useState } from 'react';
import { Link, Logo, User } from './components';
import { Home } from './components/_media';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 5b253f23

// http://www.omdbapi.com/?apikey=5b253f23&s=star

function App() {
  return (
    <div className="App">
      <User username='User Name'/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Link path='/' title='Home' active>
              <Home />
            </Link>
          }>
            
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
