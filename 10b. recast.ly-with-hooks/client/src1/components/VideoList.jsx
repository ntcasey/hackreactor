import React, { useContext } from "react";
import VideoListEntry from "./VideoListEntry.jsx";
import { VideoContext } from "./VideoProvider.jsx";
require("../styles/style.css");

// function VideoList({ video, handleClickFn }) {
function VideoList() {
  const { data: video } = useContext(VideoContext);

  return (
    <div className="video-list">
      {video.map((entry, index) => (
        <div key={index}>
          <h5>
            <VideoListEntry
              key={index}
              entry={entry}
              // handleClickFn={handleClickFn}
            />
          </h5>
        </div>
      ))}
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired,
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
