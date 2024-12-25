import './App.css';
import Header from './Defaults/Header';
import Home from "./Mains/Home";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/" element={<Home></Home>} />
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutUs></AboutUs>} />
        </Routes>
        <Routes>
          <Route path="/timeline" element={<Timeline></Timeline>} />
        </Routes>
        <Routes>
          <Route path="/gallery" element = {<Gallery></Gallery>} />
        </Routes>
        <Routes>
          <Route path="/contactus" element = {<ContactUs></ContactUs>} />
        </Routes>
        <Routes>
          <Route path="/meettheteam" element = {<MeetTheTeam></MeetTheTeam>} />
        </Routes>
        <Routes>
          <Route path="/events" element = {<EventsPage></EventsPage>} />
        </Routes>

    </div>
  );
}

export default App;
