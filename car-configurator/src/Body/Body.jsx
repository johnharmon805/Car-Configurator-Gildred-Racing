import React from 'react';
import './Body.css';
import Gildred from './Assets/GR Logo.png';
// these two below are temporary
import Red from './Assets/red.png';
import Blue from './Assets/Blue-Cooper.png'


class Body extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            isRed: true,
            isGreen: false,
            isBlue: false,
            isGray: false,
            isYellow: false,
            isBlack: false,
            isWhite: false,
            rimOne: true,
            rimTwo: false,
            rimThree: false,
            rimFour: false,
            rimFour: false
        }
        this.isRed = this.isRed.bind(this)
        this.isGreen = this.isGreen.bind(this)
        this.isBlue = this.isBlue.bind(this)
        this.isGray = this.isGray.bind(this)
        this.isYellow = this.isYellow.bind(this)
        this.isBlack = this.isBlack.bind(this)
        this.isWhite = this.isWhite.bind(this)
    }
    isRed() {
        this.setState({
            isRed: true,
            isGreen: false,
            isBlue: false,
            isGray: false,
            isYellow: false,
            isBlack: false,
            isWhite: false,
        })
    }
    isGreen() {
        this.setState({
            isRed: false,
            isGreen: true,
            isBlue: false,
            isGray: false,
            isYellow: false,
            isBlack: false,
            isWhite: false,
        })
    }
    isBlue() {
        this.setState({
            isRed: false,
            isGreen: false,
            isBlue: true,
            isGray: false,
            isYellow: false,
            isBlack: false,
            isWhite: false,
        })
    }
    isGray() {
        this.setState({
            isRed: false,
            isGreen: false,
            isBlue: false,
            isGray: true,
            isYellow: false,
            isBlack: false,
            isWhite: false,
        })
    }
    isYellow() {
        this.setState({
            isRed: false,
            isGreen: false,
            isBlue: false,
            isGray: false,
            isYellow: true,
            isBlack: false,
            isWhite: false,
        })
    }
    isBlack() {
        this.setState({
            isRed: false,
            isGreen: false,
            isBlue: false,
            isGray: false,
            isYellow: false,
            isBlack: true,
            isWhite: false,
        })
    }
    isWhite() {
        this.setState({
            isRed: false,
            isGreen: false,
            isBlue: false,
            isGray: false,
            isYellow: false,
            isBlack: false,
            isWhite: true,
        })
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
        <div className="col-md-8">
            <div className="col">
                <img id="car" src={this.state.isRed ? {Red} : null}></img>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row">Exterior Colors</div>
            <div className="row">
                <div className="col"><button id="red" onClick={this.isRed}></button></div>
                <div className="col"><button id="green" onClick={this.isGreen}></button></div>
                <div className="col"><button id="blue" onClick={this.isBlue}></button></div>
                <div className="col"><button id="gray" onClick={this.isGray}></button></div>
                <div className="col"><button id="yellow" onClick={this.isYellow}></button></div>
                <div className="col"><button id="black" onClick={this.isBlack}></button></div>
                <div className="col"><button id="white" onClick={this.isWhite}></button></div>
            </div>
        </div>
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