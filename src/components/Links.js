import React from "react";

class Links extends React.Component {
    render() {
        return (
            <div className="links">
                <ul className="social-icons">
                    <li>
                        <a data-track="twitter" className="icon-twitter twitter" target="twitter" href="//twitter.com/yopsuzy"></a>
                    </li>
                    <li>
                        <a data-track="instagram" className="icon-instagram instagram" target="" href="//www.instagram.com/yopsuzy/"></a>
                    </li>
                    <li>
                        <a data-track="youtube" className="icon-youtube youtube" target="" href="//www.youtube.com/channel/UCmYTs3upimp5CfZqPk8sZyA"></a>
                    </li>
                    <li>
                        <a data-track="mail" className="icon-mail spotify" target="" href="mailto:yopsuzy@gmail.com"></a>
                    </li>
                    <li>
                        <a data-track="apple-music" className="icon-applemusic appleinc" target="" href="//smarturl.it/ThePerfectLuvTape"></a>
                    </li>
                </ul>
                <i class="down"></i>
            </div>
        );
    }
};

export default Links