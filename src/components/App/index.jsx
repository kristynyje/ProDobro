import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Form } from '../Form';
import { Header } from '../Header';
import { Home } from '../Home';
import { Login } from '../Login';
import { Auction } from '../Auction';
import { useState } from 'react';
import { auth } from '../../firebase';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

export const App = () => {
  const [user, setUser] = useState(() => auth.currentUser);
  useEffect(
    () =>
      onAuthStateChanged(auth, (data) => {
        if (data?.email) {
          setUser(data);
        } else {
          setUser(undefined);
        }
      }),
    [],
  );
  const handleSignOut = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  return (
    <>
      <Header user={user} onSignOut={handleSignOut} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {!user ? (
            <Route path="/*" element={<Login />} />
          ) : (
            <>
              <Route path="/form" element={<Form />} />
              <Route path="/auction" element={<Auction />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};
