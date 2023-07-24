import React, { useContext, useEffect, useState } from "react";
import "../styles/currsong.css";
import banner from "../assets/banner.png";
import more from "../assets/details.png";
import back from "../assets/backward.png";
import forw from "../assets/forward.png";
import play from "../assets/play.png";
import speaker from "../assets/speaker.png";
import { AppContext } from "./Context";
import { useParams } from "react-router-dom";
import Audio from "./Audio";
import Color from "color-thief-react";

const CurrentSong = () => {
  const { id } = useParams();

  const { loading, error, data, setSongId, setCurrSong, setColor, finalSong } =
    useContext(AppContext);
  const [bgColor, setBgColor] = useState("#ffffff");

  if (loading) {
    <h1>loading</h1>;
  }
  if (error) {
    <h1>Error</h1>;
  }

  setSongId(id);

  {
    data && setCurrSong(data.getSongs);
  }

  if (finalSong) {
    const url = finalSong.photo;

    return (
      <div className="audio-player-out">
        <div className="audio-player">
          <div className="player-details">
            <h1>{finalSong.title}</h1>
            <p>{finalSong.artist}</p>
          </div>
          <div
            className="player-banner-out"
            style={{ backgroundImage: `url(${finalSong.photo})` }}
          />

          <Audio url={finalSong.url} />
        </div>

        <div style={{ display: "none" }}>
          <Color src={finalSong.photo} crossOrigin="anonymous" format="hex">
            {({ data, loading }) => {
              if (loading) return <h1>loading</h1>;
              setColor(data);
              return (
                <div>
                  Predominant color: <strong>{data}</strong>
                </div>
              );
            }}
          </Color>
        </div>
      </div>
    );
  }
};

export default CurrentSong;
