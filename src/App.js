import React from "react";
import Streamtimeline from "./components/streamtimeline.js";
import Main from "./components/main.js";
import Streaminfo from "./streaminfo";

function App() {
  return (
    <div>
      <Main />
      <Streamtimeline />
      <Streaminfo />
    </div>
  );
}

export default App;
