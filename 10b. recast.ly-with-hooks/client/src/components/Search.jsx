import React, { useState, useEffect } from "react";
import getVideo from "./getVideos.jsx";
import useDispatch from "./useDispatch.jsx";
require("../style.css");

function Search({ handleGetData }) {
  const [inputVal, setInputVal] = useState("");
  const [dispatchInput, setDispatchInput] = useState("");

  useEffect(() => {
    if (dispatchInput !== "" && dispatchInput !== undefined) {
      getVideo(dispatchInput, handleGetData);
    }
  }, [dispatchInput]);

  let newDispatch = useDispatch(inputVal, 1000);
  if (dispatchInput !== newDispatch) {
    setDispatchInput(newDispatch);
  }

  function handleInputChange(event) {
    setInputVal(event.target.value);
  }

  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        value={inputVal}
        onChange={handleInputChange}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search">Search</span>
      </button>
    </div>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
