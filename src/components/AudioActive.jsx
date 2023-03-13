import React, { /*useState,*/ useEffect } from "react";
// import { Songs } from "./Songs";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { MusicPlayer } from "./MusicPlayer";
function AudioActive({songs, setSongs, song, setSong, img, setImage}) {
  // const [songs, setSongs] = useState(Songs);
  // const [song, setSong] = useState(songs[0].song);
  // const [img, setImage] = useState(songs[0].imgSrc);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");

    function changeMenuActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  const changeFavourite = (id) => {
    songs.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });
    setSongs([...songs]);
  };
  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
  };
  return (
    <div class="AudioActive">
      <div className="AudioActiveFlex">
      <div>
        <h1>My Playlist</h1>
      </div>
      <div>
        <p>
          <a href="#">Show More</a>
        </p>
      </div>
      </div>
      <div className="songsContainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song.id}
              onClick={() => {
                setMainSong(song.song, song.imgSrc);
              }}
            >
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imgBox">
                  <img
                    src={song.imgSrc}
                    alt=""
                  />
                </div>
                <div className="section">
                  <p className="songName">{song.songName}</p>
                  <p className="spanArtist">{song.artist}</p>
                  <div className="section1">
<div className="hits">
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      03.04
                    </p>
                  </div>
                  <div>
                    <p className="songAlbum">{song.album}
                    </p>
                    </div>
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(song.id)}
                    >
                      {song.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <MusicPlayer
        song={song}
        imgSrc={img}
      />
    </div>
  );
}

export { AudioActive };
