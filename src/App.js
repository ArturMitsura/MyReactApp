import React, { useState, useMemo, useEffect } from 'react';
import './styles/App.css';
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}
export default App;
