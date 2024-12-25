import "./Header.css";
import "../fonts.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "../Mains/AboutUs"
import Home from "../Mains/Home.js"


function Header() {
  return (
    <div className="Header">
      <a href="../Mains/Home.js">
        <div id="Logo-holder">
        <img src="../logo.png" alt="" className="Logo" />
          <h2 id="logo-text">
            <div id="fremont">Fremont High's</div> Science Olympiad
          </h2>
        </div>
      </a>

      <ul id="nav-link-holder">
        <li className="nav-link">
        <a href="/">Home</a>

        </li>
        <li className="nav-link">
        <a href="/about">About Us</a>
        </li>

        <li className="nav-link">
          <a href="/timeline">Timeline</a>
        </li>

        <li className="nav-link">
          <a href="/gallery">Gallery</a>
        </li>

        <li className="nav-link">
          <a href="/contactus">Contact Us</a>
        </li>

        <li className="nav-link">
          <a href="/meettheteam">Meet The Team</a>
        </li>

        <li className="nav-link">
          <a href="/events">Events</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
