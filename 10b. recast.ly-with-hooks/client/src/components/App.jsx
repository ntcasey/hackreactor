import React, { useState, useEffect } from "react";
// import data from "../data/exampleVideoData";
import VideoList from "./VideoList.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import configYoutubeAPI from "../config/youtube.js";
import Search from "./Search.jsx";
const axios = require("axios");
require("../style.css");

function App() {
  const maxResult = 5;
  const search = "nba finals";

  const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&videoEmbeddable=true&q=${search}&type=video&key=${configYoutubeAPI}`;

  const [data, setData] = useState([]);
  const [currentVideo, setCurrentVideo] = useState();

  useEffect(() => {
    if (data.length !== 0) {
      setCurrentVideo(data[0]);
    }
  }, [data]);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div>
            <h5>
              <Search handleGetData={setData} />
            </h5>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <h5>
              <VideoPlayer video={currentVideo} />
            </h5>
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <h5>
              <VideoList video={data} handleClickFn={setCurrentVideo} />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
