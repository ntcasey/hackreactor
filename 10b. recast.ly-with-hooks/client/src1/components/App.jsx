import React, { useState } from "react";
// import data from "../data/exampleVideoData";
import VideoList from "./VideoList.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import { VideoProvider } from "./VideoProvider.jsx";
require("../styles/style.css");

function App() {
  //const [currentVideo, setCurrentVideo] = useState(data[0]);

  return (
    <VideoProvider>
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <h5>
                <em>search</em> view goes here
              </h5>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <h5>
                {/* <VideoPlayer video={currentVideo} /> */}
                <VideoPlayer />
              </h5>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <h5>
                {/* <VideoList video={data} handleClickFn={setCurrentVideo} /> */}
                <VideoList />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </VideoProvider>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
