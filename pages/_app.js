import React, { useState, useMemo } from 'react';
import "../assets/scss/main.scss";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import AuthContext from '../context/AuthContext';

import { setToken } from "../api/token";

function MyApp({ Component, pageProps }) {
  const [ auth, setAuth ] = useState(undefined);
  console.log(auth);
  
  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id
    })
  }
  
  const authData = useMemo(
    () => ({
      auth: { name: "Luisangel", email: "luisangelmarcia@gmail.com" },
      login,
      logout: () => null,
      setReloadUser: () => null,
    }), []);

  return (
    <AuthContext.Provider value={authData}>
      <Component {...pageProps} />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  );
}

export default MyApp;
