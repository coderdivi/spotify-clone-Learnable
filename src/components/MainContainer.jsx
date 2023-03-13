import React from "react";
import "../styles/MainContainer.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { Banner } from "./Banner";
import { FaFireAlt } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { AudioActive } from "./AudioActive";

function MainContainer({songs, setSongs, song, setSong, img, setImage}) {
  return (
    <div className="mainContainer">
      <div className="contain">

      <div className="searchMargin">
        <div className="arrowIcons">
          <i>
            <BsArrowLeft className="arrowLeft" />
          </i>

          <i>
            <BsArrowRight className="arrowRight" />
          </i>
        </div>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search..."
          />
          <i>
            <BiSearchAlt />
          </i>
        </div>
      </div>
      <div id="bannerSpan"className="topBannerSpan">
        <div>
          <h5>What's Hot</h5>
        </div>
        <div>
          <i>
            <FaFireAlt />
          </i>
        </div>
      </div>
      <div className="topBannerTxt">
        <div>
          <h1>Trending</h1>
        </div>
        <div className="topBannerSpan">
          <div>
            <p>More</p>
          </div>
          <div>
            <i>
              <BsChevronRight />
            </i>
          </div>
        </div>
      </div>
      <Banner />
      <AudioActive songs={songs} setSongs={setSongs} 
          song={song} setSong={setSong} img={img} setImage={setImage}/>
      </div>
    </div>
  );
}

export { MainContainer };
