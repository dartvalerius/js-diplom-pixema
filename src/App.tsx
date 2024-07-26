import React, { useEffect, useState } from 'react';
import { Film, Films, ItemLink, Logo, Main, SignIn, User } from './components';
import { Home } from './components/_media';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FilmCard } from './components/Films/FilmCard';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/action-creators';

// 5b253f23

// http://www.omdbapi.com/?apikey=5b253f23&s=star

// QVC1ZB2-T0K4224-NS3TA7F-6SXFKPN

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('apiKey')) {
      dispatch(setUser({
        apiKey: localStorage.getItem('apiKey') ?? '',
        email: localStorage.getItem('email') ?? '',
        username: localStorage.getItem('username') ?? '',
        favorites: Array<string>(localStorage.getItem('favorites') ?? '')
      })) 
    } else {
      if (window.location.pathname !== '/signIn')
        window.location.pathname = '/signIn'
    }
  }, [])
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Main><Films /></Main>} />
          <Route path='/' element={<Main><Films /></Main>} />
          <Route path=':id' element={<Main><Film /></Main>}/>
          <Route path='/signIn' element={<SignIn />} />
          <Route path="*" element={<Main>WrongPage</Main>} />
        </Routes>
        <Routes>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
