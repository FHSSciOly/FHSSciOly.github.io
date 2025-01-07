import './App.css';
import Header from './Defaults/Header';
import Home from "./Mains/Home";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Router } from "react-router-dom";

// import { HashRouter } from "react-router-dom";
import AboutUs from "./Mains/AboutUs"
import Timeline from "./Mains/Timeline"
import Gallery from "./Mains/Gallery"
import ContactUs from "./Mains/ContactUs"
import MeetTheTeam from "./Mains/MTT"
import EventsPage from "./Mains/Events"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/timeline" element={<Timeline />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/meettheteam" element={<MeetTheTeam />} />

          <Route path="/events" element={<EventsPage />} />

          <Route path="*" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
