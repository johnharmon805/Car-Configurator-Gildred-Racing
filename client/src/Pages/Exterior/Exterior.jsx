/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Exterior.css';

class Exterior extends React.Component {
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
            rimFive: false
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

        {/* Yeah, the ternary statement is horrible. We're aware. Are we going to change it? Nope :) */}
    <div className="row">
        <div className="col-md-8">
            <div className="col">
                <img id="car" alt="" height="200" width="500" src={
                    this.state.isRed && this.state.rimOne ? "/Assets/red.png" : 
                    this.state.isRed && this.state.rimTwo ? "/Assets/red2.png" : 
                    this.state.isRed && this.state.rimThree ? "/Assets/red3.png" :
                    this.state.isRed && this.state.rimFour ? "/Assets/red4.png" :
                    this.state.isRed && this.state.rimFive ? "/Assets/red5.png" :
                    this.state.isBlue && this.state.rimOne ? "/Assets/Blue.png" : 
                    this.state.isBlue && this.state.rimTwo ? "/Assets/Blue2.png" : 
                    this.state.isBlue && this.state.rimThree? "/Assets/Blue3.png" : 
                    this.state.isBlue && this.state.rimFour ? "/Assets/Blue4.png" :
                    this.state.isBlue && this.state.rimFive ? "/Assets/Blue5.png" :
                    this.state.isSkyBlue && this.state.rimOne ? "/Assets/Skyblue.png" : 
                    this.state.isSkyBlue && this.state.rimTwo ? "/Assets/Skyblue2.png" : 
                    this.state.isSkyBlue && this.state.rimThree ? "/Assets/Skyblue3.png" : 
                    this.state.isSkyBlue && this.state.rimFour ? "/Assets/Skyblue4.png" : 
                    this.state.isSkyBlue && this.state.rimFive ? "/Assets/Skyblue5.png" : 
                    this.state.isLightBlue && this.state.rimOne ? "/Assets/lightblue.png" : 
                    this.state.isLightBlue && this.state.rimTwo ? "/Assets/lightblue2.png" : 
                    this.state.isLightBlue && this.state.rimThree ? "/Assets/lightblue3.png" : 
                    this.state.isLightBlue && this.state.rimFour ? "/Assets/lightblue4.png" : 
                    this.state.isLightBlue && this.state.rimFive ? "/Assets/lightblue5.png" : 
                    this.state.isWhite && this.state.rimOne ? "/Assets/White.png" : 
                    this.state.isWhite && this.state.rimTwo ? "/Assets/white2.png" :
                    this.state.isWhite && this.state.rimThree ? "/Assets/white3.png" :
                    this.state.isWhite && this.state.rimFour ? "/Assets/white4.png" :
                    this.state.isWhite && this.state.rimFive ? "/Assets/white5.png" : null
                    }></img>
            </div>
        </div>
        <div className="col-md-4" id="settings">
            <div className="row" id="colorstitle">Exterior Colors</div>
            <div className="row" id="colorselect">
                <div className="col"><button className="color-btns" onClick={()=>this.handleSubmit("isRed")}><img id="red-btn" src="/Assets/red-btn.png"></img></button></div>
                <div className="col"><button className="color-btns" onClick={()=>this.handleSubmit("isBlue")}><img id="blue-btn" src="/Assets/blue-btn.png"></img></button></div>
                <div className="col"><button className="color-btns" onClick={()=>this.handleSubmit("isSkyBlue")}><img id="skyblue-btn" src="/Assets/skyblue-btn.png"></img></button></div>
                <div className="col"><button className="color-btns" onClick={()=>this.handleSubmit("isLightBlue")}><img id="lightblue-btn" src="/Assets/lightblue-btn.png"></img></button></div>
                <div className="col"><button className="color-btns" onClick={()=>this.handleSubmit("isWhite")}><img id="white-btn" src="/Assets/white-btn.png"></img></button></div>
            </div>
            {/* <div className="row">
                <div className="col"><button id="yellow" onClick={()=>this.handleSubmit("isYellow")}></button></div>
                <div className="col"><button id="black" onClick={()=>this.handleSubmit("isBlack")}></button></div>
            </div> */}
            <div className="row" id="wheeltitle">Tire Rims</div>
            <div className="row" id="wheeloptions">
                <div className="col"><button className="rim-btn1" id="rimOne" onClick={()=>this.handleSubmitButton("rimOne")}><img id="rim1img" src="/Assets/rim-1.png"></img></button></div>
                <div className="col"><button className="rim-btn" id="rimTwo" onClick={()=>this.handleSubmitButton("rimTwo")}><img id="rim2img" src="/Assets/rim-2.png"></img></button></div>
                <div className="col"><button className="rim-btn" id="rimTwo" onClick={()=>this.handleSubmitButton("rimThree")}><img id="rim3img" src="/Assets/rim-3.png"></img></button></div>
                <div className="col"><button className="rim-btn" id="rimTwo" onClick={()=>this.handleSubmitButton("rimFour")}><img id="rim4img" src="/Assets/rim-4.png"></img></button></div>
                <div className="col"><button className="rim-btn" id="rimTwo" onClick={()=>this.handleSubmitButton("rimFive")}><img id="rim2img" src="/Assets/rim-5.png"></img></button></div>
            </div>
        </div>
    </div>

        </div>
            ) 
    }
}

export default Exterior;