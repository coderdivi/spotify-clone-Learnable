import React, { useState, useEffect } from "react";
// import { Songs } from ".components/Songs";

import "./App.css";
import { MainContainer } from "./components/MainContainer";
import { RightMenu } from "./components/RightMenu";
import { LeftMenu } from "./components/LeftMenu";
import { Songs } from "./components/Songs";
import { LoginScreen } from "./components/LoginScreen";

function App() {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return token ? (
    <div className="App">
      <button onClick={logout}>Logout</button>
      <LeftMenu />
      <MainContainer
        songs={songs}
        setSongs={setSongs}
        song={song}
        setSong={setSong}
        img={img}
        setImage={setImage}
      />
      <RightMenu
        songs={songs}
        setSongs={setSongs}
        song={song}
        setSong={setSong}
        img={img}
        setImage={setImage}
      />
    </div>
  ) : (
    <LoginScreen />
  );
}

export default App;
