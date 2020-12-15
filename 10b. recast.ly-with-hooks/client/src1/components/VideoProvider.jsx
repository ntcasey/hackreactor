import React, { useState, createContext } from "react";
import data from "../data/exampleVideoData";

const VideoContext = createContext();
function VideoProvider(props) {
  const [currentVideo, setCurrentVideo] = useState(data[0]);
  const value = {
    currentVideo,
    setCurrentVideo,
    data,
  };

  return (
    <VideoContext.Provider value={value}>
      {props.children}
    </VideoContext.Provider>
  );
}

export { VideoContext, VideoProvider };
