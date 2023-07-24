import React, { createContext, useState, useEffect } from "react";
import { gql, useQuery } from '@apollo/client';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const songQuery = gql`
    query Query($playlistId: Int!, $search: String) {
      getSongs(search: $search ,playlistId: $playlistId) {
        _id
        artist
        duration
        photo
        title
        url
      }
      getPlaylists {
        id
        title
      }
    }
  `;

  const [search, setSearch] = useState("");
  const [playlistNo, setPlaylistNo] = useState();
  const [finalSong, setFinalSong] = useState({
    "__typename": "Song",
    "_id": "61b6f14dc2f7cafd968c31f0",
    "artist": "Weeknd",
    "duration": 320,
    "photo": "https://images.genius.com/e95f361c27487088fd9dddf8c967bf89.500x500x1.jpg",
    "title": "Starboy",
    "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
});
  const [color, setColor] = useState("");
  const [songId, setSongId] = useState("");
  const [currSong, setCurrSong] = useState([]);
  const [show, setShow] = useState(false)

  

  const { loading, error, data } = useQuery(songQuery, {
    variables: { playlistId: playlistNo, search: search },
  });

  useEffect(() => {

    if (currSong.length > 0 && songId) {
      const songData = currSong.find((obj) => obj._id === songId);
      setFinalSong(songData);
    }
  }, [songId]);

  return (
    <AppContext.Provider
      value={{
        playlistNo,
        setPlaylistNo,
        //for songs
        search,
        setSearch,
        loading,
        error,
        data,
        currSong,
        setCurrSong,
        songId,
        setSongId,
        color,
        setColor,
        finalSong
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
