/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Exterior.css';
import { SwatchesPicker } from 'react-color';

class Exterior extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            rimOne: true,
            rimTwo: false,
            rimThree: false,
            rimFour: false,
            rimFive: false,
            rimSix: false,
            background: "fff"
        }
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
      };
    handleSubmitButton = (buttonState)=>{
        this.setState({
            rimOne: false,
            rimTwo: false,
            rimThree: false,
            rimFour: false,
            rimFive: false,
            rimSix: false,
            [buttonState]:true
        })
    }
    render() {
        let customColor = this.state.background
        return(
        <div>
    <div className="row">
        <div className="col-md-8">
            <div className="col">
                    <img src="/Assets/topLayer.png" id="car" height="200" width="500"></img>
                    <img src="/Assets/maskinglayertest.png" id="carBody" height="200px" style={{backgroundColor: `${customColor}`}}/>
                    {this.state.rimSix ? null : <img id="rim-layer" src={
                        this.state.rimOne ? "/Assets/rim1.png" :
                        this.state.rimTwo ? "/Assets/rim2.png" :
                        this.state.rimThree ? "/Assets/rim3.png" :
                        this.state.rimFour ? "/Assets/rim4.png" :
                        this.state.rimFive ? "/Assets/rim5.png" : null
                    }/>}
            </div>
        </div>
        <div className="col-md-4" id="settings">
            <div className="row" id="colorstitle">Exterior Colors</div>
            <div className="row" id="colorselect">
                {/* <div className="col"><button className="color-btns" onClick={()=>this.handleSubmit("isRed")}><img id="red-btn" src="/Assets/red-btn.png"></img></button></div>
                <div className="col"><button className="color-btns" onClick={()=>this.handleSubmit("isBlue")}><img id="blue-btn" src="/Assets/blue-btn.png"></img></button></div>
                <div className="col"><button className="color-btns" onClick={()=>this.handleSubmit("isSkyBlue")}><img id="skyblue-btn" src="/Assets/skyblue-btn.png"></img></button></div>
                <div className="col"><button className="color-btns" onClick={()=>this.handleSubmit("isLightBlue")}><img id="lightblue-btn" src="/Assets/lightblue-btn.png"></img></button></div>
                <div className="col"><button className="color-btns" onClick={()=>this.handleSubmit("isWhite")}><img id="white-btn" src="/Assets/white-btn.png"></img></button></div> */}
                {/* <div classname="col"><button className="rainbow-btn" onClick={this.handleColor}>Choose your own color</button></div> */}
               <SwatchesPicker onChange={ this.handleChangeComplete }/>
            </div>
            <div className="row" id="wheeltitle">Tire Rims</div>
            <div className="row" id="wheeloptions">
                <div className="col"><button className="rim-btn1" id="rimOne" onClick={()=>this.handleSubmitButton("rimOne")}><img id="rim1img" src="/Assets/rim-1.png"></img></button></div>
                <div className="col"><button className="rim-btn" id="rimTwo" onClick={()=>this.handleSubmitButton("rimTwo")}><img id="rim2img" src="/Assets/rim-2.png"></img></button></div>
                <div className="col"><button className="rim-btn" id="rimTwo" onClick={()=>this.handleSubmitButton("rimThree")}><img id="rim3img" src="/Assets/rim-3.png"></img></button></div>
            </div>
            <div className="row">   
                <div className="col"><button className="rim-btn" id="rimTwo" onClick={()=>this.handleSubmitButton("rimFour")}><img id="rim4img" src="/Assets/rim-4.png"></img></button></div>
                <div className="col"><button className="rim-btn" id="rimTwo" onClick={()=>this.handleSubmitButton("rimFive")}><img id="rim2img" src="/Assets/rim-5.png"></img></button></div>
                <div className="col"><button className="rim-btn6" id="rimTwo" onClick={()=>this.handleSubmitButton("rimSix")}><img id="rim6img" src="/Assets/rim-6.png"></img></button></div>
            </div>
        </div>
    </div>
</div>
            ) 
    }
}

export default Exterior;