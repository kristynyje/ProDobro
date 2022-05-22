import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Form } from '../Form';
import { Header } from '../Header';
import { Home } from '../Home';
import { Login } from '../Login';
import { Auction } from '../Auction';

export const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/auction" element={<Auction />} />
      </Routes>
    </BrowserRouter>
  </>
);
