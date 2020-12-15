import configYoutubeAPI from "../config/youtube.js";
const axios = require("axios");

export default function getVideo(search, setData) {
  const maxResult = 5;
  const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&videoEmbeddable=true&q=${search}&type=video&key=${configYoutubeAPI}`;

  axios
    .get(endpoint)
    .then((response) => {
      console.log(response.data.items);
      let resData = response.data.items;
      setData((prevData) => {
        while (prevData.length > 0) prevData.pop();
        prevData = [...resData];
        return prevData;
      });
    })
    .catch((err) => console.log(err));
}
