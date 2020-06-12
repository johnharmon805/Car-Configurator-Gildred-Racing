import React from 'react';
import './Body.css';


class Body extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            isRed: true,
            isLightBlue: false,
            isBlue: false,
            isSkyBlue: false,
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
            isLightBlue: false,
            isBlue: false,
            isSkyBlue: false,
            isYellow: false,
            isBlack: false,
            isWhite: false,
            [buttonState]:true
        })
    }
    render() {
        return(
        <div>


    <div className="row">
        <div className="col-md-8">
            <div className="col">
                <img id="car" src={this.state.isRed ? "/Assets/red.png" : this.state.isBlue ? "/Assets/Blue.png" : null}></img>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row">Exterior Colors</div>
            <div className="row scrollWindow">
                <div className="col"><button id="red" onClick={()=>this.handleSubmit("isRed")}></button></div>
                <div className="col"><button id="lightBlue" onClick={()=>this.handleSubmit("isLightBlue")}></button></div>
                <div className="col"><button id="blue" onClick={()=>this.handleSubmit("isBlue")}></button></div>
                <div className="col"><button id="skyBlue" onClick={()=>this.handleSubmit("isSkyBlue")}></button></div>
                <div className="col"><button id="yellow" onClick={()=>this.handleSubmit("isYellow")}></button></div>
                <div className="col"><button id="black" onClick={()=>this.handleSubmit("isBlack")}></button></div>
                <div className="col"><button id="white" onClick={()=>this.handleSubmit("isWhite")}></button></div>
            </div>
        </div>
    </div>

        </div>
            ) 
    }
}

export default Body;