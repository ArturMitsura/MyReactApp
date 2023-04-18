import React, { useState, useMemo, useEffect } from 'react';
import './styles/App.css';
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from "./context";


function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )
}
export default App;
