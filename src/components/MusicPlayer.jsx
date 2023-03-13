import React, { useRef, useState } from "react";
import "../styles/MusicPlayer.css";
import {
  FaBackward,
  FaPause,
  FaRegHeart,
  FaStepBackward,
  FaStepForward,
  FaPlay,
  FaForward,
  FaShareAlt,
} from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer({ song, imgSrc }) {
  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const audioPlayer = useRef;
  const progressBar = useRef;

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setPlaying(!prevValue);
  };

  const changedLoved = () => {
    setLoved(!isLove);
  };
  return (
    <div className="musicPlayer">
      {/* <div className="songImage">
        <img
          src={imgSrc}
          alt=""
        />
      </div> */}
      <div className="songAttributes">
        <audio
          src={song}
          preload="metadata"
          useRef={audioPlayer}
        />
        <div className="top">
          <div className="left">
            <div
              className="loved"
              onClick={changedLoved}
            >
              {isLove ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>
            <div className="download">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div
              className="playPause"
              onClick={changePlayPause}
            >
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="bottom">
          <div className="currentTime">00:00</div>
          <input
            type="range"
            className="progressBar"
            useRef={progressBar}
          />
          <div className="duration">00:00</div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
