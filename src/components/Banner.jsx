import React from "react";
import Man from "../styles/img/man.jpeg";
// import Check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
function Banner() {
  return (
    <div className="Banner">
      <img
        src={Man}
        alt=""
        className="bannerImg"
      />
      <div className="content">
            <div className="breadCrump">
            <p>Artist</p>
            <i>
                <FaEllipsisH />
            </i>
            </div>
            <div className="artist">
                <div className="left">
                    <div className="name">
                    <h1>
                        On Top
                        <br />
                        Of the World
                    </h1>
                    {/* <img
                            src={Check}
                            alt="checkmarkImg"
                        /> */}
                    </div>
                </div>
            </div>
            <div className="buttonView">
            <div className="right">
                <a href="#">Play</a>
                <a href="#">
                    <i>
                    <FaCheck />
                    </i>
                    Following
                </a>
            </div>
            <div>
                <p>
                    <i>
                    <FaHeadphones />
                    </i>
                    11,184,1811 <span>Monthly Listeners</span>
                </p>
            </div>
            </div>
        </div>
      <div className="bottomLayer"></div>
      {/* <img src={Check} alt="" /> */}
    </div>
  );
}

export { Banner };
