import React, { useState, useMemo, useEffect } from 'react';
import './styles/App.css';
import About from "./pages/About";
import Posts from "./pages/Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
