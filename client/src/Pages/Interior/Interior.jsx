import React from 'react';
import "./Interior.css"

class Interior extends React.Component {
    render() {
        return (
          <>
            <div class="container" id="vid-overlay">
              <div class="vidContainer">
                <video
                  id="faceVideo"
                  width="1000px"
                  height="640px"
                  autoplay
                  loop
                  muted
                >
                  <source src="interior-vid.mp4" type="video/mp4" />
                </video>
                <div class="overlay">
                  <img
                    id="interiorImg"
                    alt=""
                    src="inside.png"
                  />
                </div>
              </div>
            </div>
          </>
        );
    }
}
export default Interior;