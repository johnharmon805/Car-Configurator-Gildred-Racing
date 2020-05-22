import React from 'react';
import './Body.css';
import Gildred from './Assets/GR Logo.png';

class Body extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            isRed: true
        }
    }
    render() {
        return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img id="logo" src={Gildred}></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </div>
    </nav>


    <div className="row">
        <div className="col-md-8">Car Goes Here</div>
        <div className="col-md-4">Options Go Here</div>
    </div>



    <div className="bottom-page">
        <footer>
            <p id="copyright">Copyright© Gildred Racing | Configurator Developed by John Harmon & Andrew Lee</p>
        </footer>
    </div>
        </div>
            ) 
    }
}

export default Body;