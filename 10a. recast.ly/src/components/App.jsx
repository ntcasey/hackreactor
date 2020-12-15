import Search from "./Search.js";
import VideoPlayer from "./VideoPlayer.js"
import VideoList from "./VideoList.js"
import exampleVideoData from "../data/exampleVideoData.js"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  handleVideoListEntryTitleClicked(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList handleVideoListEntryTitleClicked={this.handleVideoListEntryTitleClicked.bind(this)} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
