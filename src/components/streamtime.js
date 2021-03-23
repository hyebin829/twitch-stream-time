import React from "react";
import axios from "axios";
import getApi from "../api";
import { useState, useEffect } from "react";

function Streamtime() {
  // const [stream, setStream] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getApi.get(
  //       "https://api.twitch.tv/helix/channels?broadcaster_id=hanryang1125",
  //       {
  //         headers: {
  //           "Client-Id": "9q6oisptyvvdncbo559zgs7x2n1w2a",
  //           Authorization: `Bearer ${getToken.data.access_token}`
  //         },
  //       }
  //     );

  //     console.log(result.data);
  //   };
  //   fetchData();
  // });
  return <div>stream</div>;
}

export default Streamtime;
