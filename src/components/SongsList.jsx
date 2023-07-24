import React, { useContext } from 'react'
import { AppContext } from './Context'
import { NavLink } from 'react-router-dom';
import '../styles/songslist.css'
import { motion } from 'framer-motion';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SongsList = ({value}) => {
  
  const {setPlaylistNo, loading, error, data} = useContext(AppContext);
  setPlaylistNo(value)
  
  if(loading){
    return(
      <Stack spacing={1}>
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={60} />
    
    </Stack>
      )
    }
    if (error) {
      return <p>Error: {error.message}</p>;
    }
 
return (
  <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <div className='songs' >
          {/* <Outlet/> */}
        {data.getSongs.map(song=>{
          return(
            <NavLink to = {`song/${song._id}`} key={song._id}>
            <div className='single-song'>
              <div className='song-img'>
                <div className='song-image-out'>
                  <img src={song.photo} alt={song.title}/>
                </div>
                <div className='song-details' >
                  <h1 className='song-title'>{song.title}</h1>
                  <p className='singer'>{song.artist}</p>
                </div>
              </div>
              <p>{song.duration.toString().slice(0,1) + `:` +  song.duration.toString().slice(1)}</p>
            </div>
            </NavLink>
          )
        })}
        </div>
        </motion.div>
  )
}


export default SongsList