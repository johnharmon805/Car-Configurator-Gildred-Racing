import React from 'react';
import './Body.css';


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
    }
    handleSubmit = (buttonState)=>{
        this.setState({
            isRed: false,
            isGreen: false,
            isBlue: false,
            isGray: false,
            isYellow: false,
            isBlack: false,
            isWhite: false,
            [buttonState]:true
        })
    }
    render() {
        return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img id="logo" src="/Assets/GR logo.png"></img>
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
                <img id="car" src={this.state.isRed ? "/Assets/red.png" : this.state.isBlue ? "/Assets/Blue-Cooper.png" : null}></img>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row">Exterior Colors</div>
            <div className="row scrollWindow">
                <div className="col"><button id="red" onClick={()=>this.handleSubmit("isRed")}></button></div>
                <div className="col"><button id="green" onClick={()=>this.handleSubmit("isGreen")}></button></div>
                <div className="col"><button id="blue" onClick={()=>this.handleSubmit("isBlue")}></button></div>
                <div className="col"><button id="gray" onClick={()=>this.handleSubmit("isGray")}></button></div>
                <div className="col"><button id="yellow" onClick={()=>this.handleSubmit("isYellow")}></button></div>
                <div className="col"><button id="black" onClick={()=>this.handleSubmit("isBlack")}></button></div>
                <div className="col"><button id="white" onClick={()=>this.handleSubmit("isWhite")}></button></div>
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