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
  const [finalSong, setFinalSong] = useState({});
  const [color, setColor] = useState("");
  const [songId, setSongId] = useState();
  const [currSong, setCurrSong] = useState([]);

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
