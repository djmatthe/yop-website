import React from "react";

class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery-container" id="gallery">
                <h1 className="gallery-title">YOP</h1>
                <marquee behavior="scroll" scrolldelay={30} direction="left">
                    <img src="/yop1.jpg" height={350} alt="Yop"></img>
                    <img src="/yop2.jpg" height={450} alt="Yop"></img>
                    <img src="/yop3.jpg" height={300} alt="Yop"></img>
                    <img src="/yop4.jpg" height={400} alt="Yop"></img>
                </marquee>
            </div>
        );
    }
};

export default Gallery