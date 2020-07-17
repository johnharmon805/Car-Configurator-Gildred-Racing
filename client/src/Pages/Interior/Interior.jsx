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
            className='react-player fixed-bottom'
            url= 'https://www.youtube.com/watch?v=LyjUDRnlWbM?autoplay=1'
            width='75%'
            height='75%'
            loop={true}
            playing={true}
            controls={false}
          
    
          />
        </div>
                {/* <video
                  id="faceVideo"
                  width="1000px"
                  height="640px"
                  autoplay
                  loop
                  muted
                >
                  <source src="https://www.youtube.com/watch?v=LyjUDRnlWbM" type="video/mp4" />
                </video> */}
                <div class="overlay">
                  <img
                    id="interiorImg"
                    alt=""
                    src="/Assets/inside.png"
                  />
                </div>
              </div>
            </div>
          </>
        );
    }
}
export default Interior;