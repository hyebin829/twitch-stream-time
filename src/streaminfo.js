import axios from "axios";
import { useState, useEffect } from "react";

function Streaminfo() {
  const [streaminfo, setStreaminfo] = useState([]);

  const getApi = async () => {
    const getToken = await axios.post(
      " https://id.twitch.tv/oauth2/token?client_id=9q6oisptyvvdncbo559zgs7x2n1w2a&client_secret=ztzt4a2v7xie59xbxyjezdkjirl3w9&grant_type=client_credentials"
    );
    // console.log(getToken.data.access_token);
    const api = axios
      .get("https://api.twitch.tv/helix/streams?user_login=hanryang1125", {
        headers: {
          "Client-ID": "9q6oisptyvvdncbo559zgs7x2n1w2a",
          Authorization: `Bearer ${getToken.data.access_token}`,
        },
      })
      .then((res) => {
        setStreaminfo([res.data.data[0]]);
        console.log(res.data.data[0]);
        // console.log(res.data);
        // console.log(res);
      });
  };

  let streamdata = streaminfo.map((data) => data);
  // let thumbnail = streaminfo.map((data) =>
  //   data.thumbnail_url.replace("{width}", "300").replace("{height}", "150")
  // );
  // console.log(streamdata);

  useEffect(() => {
    const interval = setInterval(() => {
      getApi();
    }, 10000);
    return () => clearInterval(interval);

    // getApi();
  }, [setStreaminfo]);
  return (
    <>
      {streaminfo.map((data) => (
        <>
          {" "}
          <div>
            {streamdata[0] === undefined ? (
              ""
            ) : (
              <img
                src={streaminfo.map((data) =>
                  data.thumbnail_url
                    .replace("{width}", "300")
                    .replace("{height}", "150")
                )}
                alt="thumbnail"
              />
            )}
          </div>
          <div>
            {streamdata[0] === undefined ? "방송중이 아닙니다." : data.title}
          </div>
          <div>{streamdata[0] === undefined ? "" : data.game_name}</div>
          <div>{streamdata[0] === undefined ? "" : data.viewer_count}</div>
        </>
      ))}
    </>
  );
}
// setInterval(Streaminfo, 10000);

export default Streaminfo;
