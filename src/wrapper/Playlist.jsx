import React, { useContext, useState } from 'react'
import Search from '../components/Search'
import SongsList from '../components/SongsList'
import { Routes, Route, Outlet } from 'react-router-dom'
import CurrentSong from '../components/CurrentSong'
import '../styles/playlist.css'
import { AppContext } from '../components/Context'
import { motion } from 'framer-motion'
const Playlist = ({value, title}) => {

 
  return (
    // <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     exit={{ opacity: 0, transition: { duration: 0.5 } }}
    //   >
    <div className='playlist-wrap'>
      <div className='playlist-search'>
      <h1 className='title-head'>{title}</h1>
      
      <Search />
      <SongsList value={value}/>
      </div>

      <CurrentSong/>
    </div>
    // </motion.div>
  )
}

export default Playlist