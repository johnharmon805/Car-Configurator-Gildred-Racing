import React from 'react';
import "./Interior.css";
import ReactPlayer from 'react-player';

class Interior extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      interiorOne: true,
      interiorTwo: false,
      interiorThree: false,
      interiorFour: false,
      interiorFive: false,
      interiorSix: false,
    }
  }
  handleSubmitButton = (buttonState)=>{
    this.setState({
        interiorOne: false,
        interiorTwo: false,
        interiorThree: false,
        interiorFour: false,
        interiorFive: false,
        interiorSix: false,
        [buttonState]:true
    })
    console.log(this.state.background)
}
    render() {
        return (
        <>
          <div className="row">
            <div className="container" id="vid-overlay">
              <div className="vidContainer">
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url= 'https://www.youtube.com/watch?v=LyjUDRnlWbM?autoplay=1'
                    width='1000px'
                    height='600px'
                    loop={true}
                    playing={true}
                    controls={false}
                    />
                </div>
                  <div class="overlay">
                    <img
                    id="interiorImg"
                    alt=""
                    src={
                      this.state.interiorOne ? "/Assets/interior1.png" :
                      this.state.interiorTwo ? "/Assets/interior2.png" :
                      this.state.interiorThree ? "/Assets/interior3.png" :
                      this.state.interiorFour ? "/Assets/interior4.png" :
                      this.state.interiorFive ? "/Assets/interior5.png" :
                      this.state.interiorSix ? "/Assets/interior6.png" : null
                    }
                    />
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col"><button className="interior-btn1 button fire" onClick={()=>this.handleSubmitButton("interiorOne")}>Interior 1</button></div>
              <div className="col"><button className="interior-btn button fire" onClick={()=>this.handleSubmitButton("interiorTwo")}>Interior 2</button></div>
              <div className="col"><button className="interior-btn button fire" onClick={()=>this.handleSubmitButton("interiorThree")}>Interior 3</button></div>
              <div className="col"><button className="interior-btn button fire" onClick={()=>this.handleSubmitButton("interiorFour")}>Interior 4</button></div>
              <div className="col"><button className="interior-btn button fire" onClick={()=>this.handleSubmitButton("interiorFive")}>Interior 5</button></div>
              <div className="col"><button className="interior-btn button fire" onClick={()=>this.handleSubmitButton("interiorSix")}>Interior 6</button></div>
          </div>
        </>
        );
    }
}
export default Interior;