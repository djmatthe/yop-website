import React from "react";

class Audio extends React.Component {
    render() {
        return (
            <div>
                <audio autoPlay>
                    <source src="D_WIZ_SLOW.mp3" type="audio/mpeg"></source>
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }
};

export default Audio