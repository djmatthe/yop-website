import React from "react";

class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery-container" id="gallery">
                <h1 className="gallery-title">YOP</h1>
                <div className="gal-sub-cont">
                    <h4 className="gallery-subtitle">RATED</h4>
                    <h4 className="gallery-subtitle poor">P</h4>
                    <h4 className="gallery-subtitle">FOR</h4>
                    <h4 className="gallery-subtitle poor">POOR</h4>
                </div>
                <div className="scroll-down">
                    <div className="img-overlay"></div>
                    <div className="ig-images inner">
                        <div className="slide">
                            <span>Yop1</span>
                            <img src="/yop1.jpg" alt="Yop"></img>
                        </div>
                        <div className="slide">
                            <span>Yop2</span>
                            <img src="/yop2.jpg" alt="Yop"></img>
                        </div>
                        <div className="slide">
                            <span>Yop2</span>
                            <img src="/yop3.jpg" alt="Yop"></img>
                        </div>
                        <div className="slide">
                            <span>Yop2</span>
                            <img src="/yop4.jpg" alt="Yop"></img>
                        </div>
                        <div className="slide">
                            <span>Yop2</span>
                            <img src="/yop4.jpg" alt="Yop"></img>
                        </div>
                        <div className="slide">
                            <span>Yop2</span>
                            <img src="/yop3.jpg" alt="Yop"></img>
                        </div>
                        <div className="slide">
                            <span>Yop2</span>
                            <img src="/yop2.jpg" alt="Yop"></img>
                        </div>
                        <div className="slide">
                            <span>Yop2</span>
                            <img src="/yop1.jpg" alt="Yop"></img>
                        </div>
                        <div className="slide">
                            <span>Yop2</span>
                            <img src="/yop1.jpg" alt="Yop"></img>
                        </div>
                        <div className="slide">
                            <span>Yop2</span>
                            <img src="/yop1.jpg" alt="Yop"></img>
                        </div>
                    </div>
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