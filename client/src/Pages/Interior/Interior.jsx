import React from 'react';
import "./Interior.css";
import ReactPlayer from 'react-player';

class Interior extends React.Component {
    render() {
        return (
          <>
            <div class="container" id="vid-overlay">
              <div class="vidContainer">
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
                    src="/Assets/inside.png"
                  />
                </div>
              </div>
            </div>
             {/* <div id="tvBorder" className="phone">
        <video controls autoplay height="450" width="1000px" style={{objectFit: "fill"}}>
            <source src="https://www.youtube.com/watch?v=LyjUDRnlWbM?autoplay=1" type="video/mp4" />
        </video>
    </div> */}
          </>
        );
    }
}
export default Interior;