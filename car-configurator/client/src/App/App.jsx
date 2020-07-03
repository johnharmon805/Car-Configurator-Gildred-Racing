import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Exterior from '../Pages/Exterior/Exterior';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/" component={Exterior}/>
      </Router>
    <div className="bottom-page">
      <Footer />
    </div>
    </div>
  );
}

export default App;
