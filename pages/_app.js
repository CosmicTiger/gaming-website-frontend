import React, { useMemo } from 'react';
import "../assets/scss/main.scss";
import { ToastContainer } from "react-toastify";
import AuthContext from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  const authData = useMemo(
    () => ({
      auth: { name: "Luisangel", email: "luisangelmarcia@gmail.com" },
      login: () => null,
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
