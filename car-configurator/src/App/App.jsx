import React from 'react';
import './App.css';
import Body from '../Body/Body';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img id="logo" src="/Assets/GR logo.png"></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <button id="navbarbtn">Order Your Custom Super Cooper</button>
            </ul>
        </div>
    </nav>
      <Body />


    <div className="bottom-page">
        <footer>
            <p id="copyright">Copyright© Gildred Racing | Configurator Developed by <a href= 'https://www.linkedin.com/in/johnharmon805/' >John Harmon</a> & <a href= 'https://www.linkedin.com/in/andrewdavidlee7/' >Andrew Lee</a></p>
        </footer>
    </div>
    </div>
  );
}

export default App;
