import './App.css';
import Header from './Defaults/Header';
import Home from "./Mains/Home";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Mains/AboutUs"
import Timeline from './Mains/Timeline.js';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutUs></AboutUs>} />
        </Routes>
        <Routes>
          <Route path="/timeline" element={<Timeline></Timeline>} />
        </Routes>

    </div>
  );
}

export default App;
