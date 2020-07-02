import React from 'react';
import './App.css';
import Body from '../Body/Body';
import Navbar from "../Components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
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
