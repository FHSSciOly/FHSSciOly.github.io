import "./Header.css";
import "../fonts.css";

function Header() {
  return (
    <div className="Header">
      <a href="../Mains/Home.js">
        <div id="Logo-holder">
          <img src="../logo.png" className="Logo"></img>
          <h2 id="logo-text">
            <div id="fremont">Fremont High's</div> Science Olympiad
          </h2>
        </div>
      </a>
      <ul id="nav-link-holder">
        <li className="nav-link">
          <a href="#">Home</a>
        </li>
        <li className="nav-link">
          <a href="#">About Us</a>
        </li>
        <li className="nav-link">
          <a href="#">Teams</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
