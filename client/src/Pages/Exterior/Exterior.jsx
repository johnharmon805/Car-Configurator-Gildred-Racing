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
        let customColor = {backgroundColor: `${this.state.background}`, backdropFilter: 'drop-shadow(8px 8px 10px white)'}
        return(
        <div>
    <div className="row">
        <div className="col-lg-8">
            <div className="col">
                    <img src="/Assets/topLayer.png" id="car" height="200" width="500"></img>
                    <img src="/Assets/maskinglayertest.png" id="carBody" height="200px" style={customColor}/>
                    <img src="/Assets/opacity-layer.png" id="opaque" height="200px"/>
                    <img id="rim-layer" src={
                        this.state.rimOne ? "/Assets/rim1.png" :
                        this.state.rimTwo ? "/Assets/rim2.png" :
                        this.state.rimThree ? "/Assets/rim3.png" :
                        this.state.rimFour ? "/Assets/rim4.png" :
                        this.state.rimFive ? "/Assets/rim5.png" : 
                        this.state.rimSix ? "/Assets/topLayer.png" : null
                    }/>
            </div>
        </div>
        <div className="col-lg-4" id="settings">
            <div className="row" id="colorstitle">Exterior Colors</div>
            <div className="row" id="colorselect">
               <SwatchesPicker onChange={ this.handleChangeComplete }/>
            </div>
            <div className="row" id="wheeltitle">Tire Rims</div>
            <div className="row" id="wheeloptions">
                <div className="col"><button className="rim-btn1" id="rimOne" onClick={()=>this.handleSubmitButton("rimOne")}><img id="rim1img" src="/Assets/rim-1.png"></img></button></div>
                <div className="col"><button className="rim-btn" id="rimTwo" onClick={()=>this.handleSubmitButton("rimTwo")}><img id="rim2img" src="/Assets/rim-2.png"></img></button></div>
                <div className="col"><button className="rim-btn" id="rimTwo" onClick={()=>this.handleSubmitButton("rimThree")}><img id="rim3img" src="/Assets/rim-3.png"></img></button></div>
            </div>
            <div className="row" id="wheeloptions2">   
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