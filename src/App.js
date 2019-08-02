import React from "react";
import Titles from "./components/Titles"
import Video from "./components/Video"
import Links from "./components/Links"
import Audio from "./components/Audio"
import Gallery from "./components/Gallery"

class App extends React.Component {
  render() {
    return (
      <div>
        <Titles />
        <Video />
        <Links />
        {/* <Audio /> */}
        <Gallery />
      </div>
    );
  }
}

export default App;