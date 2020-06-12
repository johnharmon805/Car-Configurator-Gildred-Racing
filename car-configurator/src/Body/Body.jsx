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
    handleSubmitButton = (buttonState)=>{
        this.setState({
            rimOne: false,
            rimTwo: false,
            rimThree: false,
            rimFour: false,
            rimFive: false,
            [buttonState]:true
        })
    }
    render() {
        return(
        <div>


    <div className="row">
        <div className="col-md-8">
            <div className="col">
                <img id="car" src={this.state.isRed && this.state.rimOne ? "/Assets/red.png" : this.state.isRed && this.state.rimTwo ? "/Assets/red2.png" : this.state.isBlue && this.state.rimOne ? "/Assets/Blue.png" : this.state.isBlue && this.state.rimTwo ? "/Assets/Blue2.png" : this.state.isLightBlue && this.state.rimOne ? "/Assets/lightblue.png" : this.state.isLightBlue && this.state.rimTwo ? "/Assets/lightblue2.png" : this.state.isSkyBlue && this.state.rimOne ? "/Assets/Skyblue.png" : this.state.isSkyBlue && this.state.rimTwo ? "/Assets/Skyblue2.png" : this.state.isWhite && this.state.rimOne ? "/Assets/White.png" : this.state.isWhite && this.state.rimTwo ? "/Assets/white2.png" : null}></img>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row">Exterior Colors</div>
            <div className="row">
                <div className="col"><button id="red" onClick={()=>this.handleSubmit("isRed")}></button></div>
                <div className="col"><button id="lightBlue" onClick={()=>this.handleSubmit("isLightBlue")}></button></div>
                <div className="col"><button id="blue" onClick={()=>this.handleSubmit("isBlue")}></button></div>
                <div className="col"><button id="skyBlue" onClick={()=>this.handleSubmit("isSkyBlue")}></button></div>
            </div>
            <div className="row">
                <div className="col"><button id="yellow" onClick={()=>this.handleSubmit("isYellow")}></button></div>
                <div className="col"><button id="black" onClick={()=>this.handleSubmit("isBlack")}></button></div>
                <div className="col"><button id="white" onClick={()=>this.handleSubmit("isWhite")}></button></div>
            </div>
            <div className="row">Tire Rims</div>
            <div className="row">
                <div className="col"><button id="rimOne" onClick={()=>this.handleSubmitButton("rimOne")}><img id="rim1img" src="/Assets/rim-1.png"></img></button></div>
                <div className="col"><button id="rimTwo" onClick={()=>this.handleSubmitButton("rimTwo")}><img id="rim2img" src="/Assets/rim-2.png"></img></button></div>
                <div className="col"><button id="rimTwo" onClick={()=>this.handleSubmitButton("rimTwo")}><img id="rim3img" src="/Assets/rim-3.png"></img></button></div>
                <div className="col"><button id="rimTwo" onClick={()=>this.handleSubmitButton("rimTwo")}><img id="rim4img" src="/Assets/rim-4.png"></img></button></div>
                <div className="col"><button id="rimTwo" onClick={()=>this.handleSubmitButton("rimTwo")}><img id="rim2img" src="/Assets/rim-5.png"></img></button></div>
            </div>
        </div>
    </div>

        </div>
            ) 
    }
}

export default Body;