import React from "react";

function Navbar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img id="logo" src="/Assets/GR logo.png"></img>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Exterior</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/interior">Interior</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Sign In</a>
            </li>
            <button id="navbarbtn">Order Your Super Cooper</button>
          </ul>
        </div>
      </nav>
    );
}
export default Navbar;