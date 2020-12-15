import React, { useContext } from "react";
import { VideoContext } from "./VideoProvider.jsx";
require("../styles/style.css");

// function VideoListEntry({ entry, handleClickFn }) {
function VideoListEntry({ entry }) {
  const { setCurrentVideo } = useContext(VideoContext);
  const { title, description, thumbnails } = entry.snippet;

  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div
          className="video-list-entry-title"
          // onClick={() => handleClickFn(entry)}
          onClick={() => setCurrentVideo(entry)}
        >
          {title}
        </div>
        <div className="video-list-entry-detail">{description}</div>
      </div>
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoListEntry.propTypes = {
//   video: React.PropTypes.object.isRequired,
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
