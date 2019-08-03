import React from "react";

class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery-container" id="gallery">
                <h1 className="gallery-title">YOP</h1>
                <div className="scroll-down">
                    <ul className="ig-images inner">
                        <img src="/yop1.jpg" alt="Yop"></img>
                        <img src="/yop3.jpg" alt="Yop"></img>
                        <img src="/yop4.jpg" alt="Yop"></img>
                    </ul>
                </div>

                {/* <ul className="ig-images">
                    <img className="left-img" src="/yop2.jpg" alt="Yop"></img>
                    <img className="right-img" src="/yop4.jpg" alt="Yop"></img>
                </ul>
                <ul className="ig-images">
                    <img className="left-img" src="/yop3.jpg" alt="Yop"></img>
                    <img className="right-img" src="/yop1.jpg" alt="Yop"></img>
                </ul> */}
            </div>
        );
    }
};

export default Gallery