import React from "react";

class Video extends React.Component {
    render() {
        return (
            <div className="videoContainer">
                <div className="overlay"></div>
                <div className="white-overlay"></div>
                <video
                    autoPlay={true}
                    className="masthead-video"
                    loop={true}
                    muted={true}
                    playsInline={true}
                    poster="/black.jpg"
                    style={{transform: "translate3d(0px, 0px, 0px)"}}>
                    <source src="/dennis_rodman.mp4" type="video/mp4"></source>
                </video>
                <a href="#gallery" title="Scroll Down" class="x-masthead-arrow">
                    <img alt="Scroll Down" src="scroll-arrow.svg"></img>
                </a>
            </div>
        );
    }
};

export default Video