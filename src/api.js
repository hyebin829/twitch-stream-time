import axios from "axios";

const getApi = async () => {
  const getToken = await axios.post(
    " https://id.twitch.tv/oauth2/token?client_id=9q6oisptyvvdncbo559zgs7x2n1w2a&client_secret=ztzt4a2v7xie59xbxyjezdkjirl3w9&grant_type=client_credentials"
  );
  console.log(getToken.data.access_token);
  const api = axios
    .get("https://api.twitch.tv/helix/streams?user_login=hanryang1125", {
      headers: {
        "Client-ID": "9q6oisptyvvdncbo559zgs7x2n1w2a",
        Authorization: `Bearer ${getToken.data.access_token}`,
      },
    })
    .then((res) => console.log(res.data.data[0]));
};
getApi();

// setInterval(getApi, 10000);



export default getApi;
