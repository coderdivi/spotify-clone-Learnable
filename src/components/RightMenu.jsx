import React from "react";
import "../styles/RightMenu.css";
import { FaSnowflake, FaGuitar, FaStar } from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { CgPiano } from "react-icons/cg";
import { GiSaxophone } from "react-icons/gi";
import { FaEllipsisH } from "react-icons/fa";
import Taylor from "../styles/img/taylor.jpeg";
import Drake from "../styles/img/drake.jpeg";
import Billie from "../styles/img/billy.jpeg";
import Kanye from "../styles/img/kanye.jpeg";
import SideImg from "./SideImg";

function RightMenu({songs, setSongs, song, setSong, img, setImage}) {
  return (
    <div className="rightMenu">
      <div className="rightMenuHeader">
        <h1>Shortcuts</h1>
      </div>

      <div className="buttonView1">
        <div className="rightA">
          <a href="#">
            <i>
              <FaSnowflake />
            </i>
            Chill Hits
          </a>
          <a href="#">
            <i>
              <FaStar />
            </i>
            Hop
          </a>
        </div>
      </div>
      <div className="buttonView1">
        <div className="rightA">
          <a href="#">
            <i>
              <FaGuitar />
            </i>
            Accoustic
          </a>
          <a href="#">
            <i>
              <BsMusicNoteBeamed />
            </i>
            Hop
          </a>
        </div>
      </div>

      <div className="buttonView1">
        <div className="rightA">
          <a href="#">
            <i>
              <CgPiano />
            </i>
            Piano Blues
          </a>
          <a href="#">
            <i>
              <GiSaxophone />
            </i>
            Jazz
          </a>
        </div>
      </div>
      <div className="rightMenuHeader">
        <h1>Fav Artist</h1>
      </div>

      <div className="rightMenuArtists">
        <div className="rightMenuText">
          <div>
            <img
              className="rmImg"
              src={Taylor}
              alt="Taylor Swift"
            />
          </div>
          <div>
            <h2>Taylor Swift</h2>
            <p>196 songs in Library</p>
          </div>
        </div>
        <div>
          <i>
            <FaEllipsisH />
          </i>
        </div>
      </div>

      <div className="rightMenuArtists">
        <div className="rightMenuText">
          <div>
            <img
              className="rmImg"
              src={Kanye}
              alt="Kanye West"
            />
          </div>
          <div>
            <h2>Kanye West</h2>
            <p>196 songs in Library</p>
          </div>
        </div>
        <div>
          <i>
            <FaEllipsisH />
          </i>
        </div>
      </div>

      <div className="rightMenuArtists">
        <div className="rightMenuText">
          <div>
            <img
              className="rmImg"
              src={Billie}
              alt="Billie Eilish"
            />
          </div>
          <div>
            <h2>Billie Eilish</h2>
            <p>196 songs in Library</p>
          </div>
        </div>
        <div>
          <i>
            <FaEllipsisH />
          </i>
        </div>
      </div>

      <div className="rightMenuArtists">
        <div className="rightMenuText">
          <div>
            <img
              className="rmImg"
              src={Drake}
              alt="Drake"
            />
          </div>
          <div>
            <h2>Drake</h2>
            <p>196 songs in Library</p>
          </div>
        </div>
        <div>
          <i>
            <FaEllipsisH />
          </i>
        </div>
      </div>
      <SideImg songs={songs} setSongs={setSongs} 
          song={song} setSong={setSong} img={img} setImage={setImage} />
    </div>
  );
}

export { RightMenu };
